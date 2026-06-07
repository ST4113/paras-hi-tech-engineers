import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import { Search, RotateCcw } from "lucide-react";

const API_BASE = import.meta.env.VITE_API_BASE_URL;

interface CatalogProduct {
  id: number;
  display_type?: "group" | "single";
  product_id?: number | null;
  part_group_id?: number | null;
  part_group_name?: string | null;
  product_ids?: number[];
  part_numbers?: string[];
  part_number?: string;
  sku?: string;
  image_url?: string | null;
  machine_type?: string;
  manufacturer?: string;
  model?: string;
  part_name?: string;
}

const getPrimaryProductId = (product: CatalogProduct): number =>
  product.product_id ?? product.id;

const getPartNumbers = (product: CatalogProduct): string[] => {
  if (Array.isArray(product.part_numbers) && product.part_numbers.length > 0) {
    return product.part_numbers;
  }
  return product.part_number ? [product.part_number] : [];
};

const getPrimaryPartNumber = (product: CatalogProduct): string =>
  getPartNumbers(product)[0] || "part";

const generateProductSlug = (product: CatalogProduct): string => {
  const parts = [
    product.manufacturer?.toLowerCase().replace(/[^a-z0-9]/g, "-"),
    product.machine_type?.toLowerCase().replace(/[^a-z0-9]/g, "-"),
    product.model?.toLowerCase().replace(/[^a-z0-9]/g, "-"),
    product.part_name?.toLowerCase().replace(/[^a-z0-9]/g, "-"),
    getPrimaryPartNumber(product).toLowerCase().replace(/[^a-z0-9]/g, "-"),
    String(getPrimaryProductId(product)),
  ].filter(Boolean);

  return parts.join("-").replace(/-+/g, "-").replace(/^-|-$/g, "");
};

const Products: React.FC = () => {
  const [products, setProducts] = useState<CatalogProduct[]>([]);
  const [filters, setFilters] = useState<any>({
    machine_types: [],
    manufacturers: [],
    models: [],
    part_names: [],
  });

  const navigate = useNavigate();

  const [selected, setSelected] = useState<any>({});
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const normalizePartNumber = (value: string) => {
    return value.replace(/[^a-zA-Z0-9]/g, "");
  };

  const fetchCatalog = async () => {
    const params = new URLSearchParams();

    if (search) {
      const normalizedSearch = normalizePartNumber(search);
      params.append("search", normalizedSearch);
    }
    if (selected.machine_type_id) {
      params.append("machine_type_id", selected.machine_type_id);
    }
    if (selected.manufacturer_id) {
      params.append("manufacturer_id", selected.manufacturer_id);
    }
    if (selected.model_id) {
      params.append("model_id", selected.model_id);
    }
    if (selected.part_name_id) {
      params.append("part_name_id", selected.part_name_id);
    }

    params.append("page", page.toString());

    const res = await fetch(`${API_BASE}/public/catalog?${params}`);
    const data = await res.json();

    setProducts(Array.isArray(data.products?.items) ? data.products.items : []);
    setFilters(data.filters || {
      machine_types: [],
      manufacturers: [],
      models: [],
      part_names: [],
    });
    setTotalPages(data.products?.total_pages || 1);
    setTotalCount(data.products?.total || 0);
  };

  useEffect(() => {
    fetchCatalog();
  }, [selected, search, page]);

  const handleFilter = (key: string, value: string) => {
    setPage(1);

    if (value === "all") {
      setSelected((prev: any) => {
        const updated = { ...prev };
        delete updated[key];
        return updated;
      });
      return;
    }

    setSelected((prev: any) => ({
      ...prev,
      [key]: value,
    }));
  };

  const resetFilters = () => {
    setSelected({});
    setSearch("");
    setPage(1);
  };

  const removeFilter = (key: string) => {
    setSelected((prev: any) => {
      const updated = { ...prev };
      delete updated[key];
      return updated;
    });

    setPage(1);
  };

  const activeFilterEntries = Object.entries(selected);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Industrial Machine Parts | Paras Hi-Tech</title>
      </Helmet>

      <Navbar />

      <main className="flex-grow">
        <section
          className="relative flex items-center justify-center bg-cover bg-center bg-no-repeat py-20 sm:py-24 md:py-32 px-4"
          style={{
            backgroundImage: 'url("/images/hero-product.webp")',
          }}
        >
          <div className="text-center text-white max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Industrial Machine <span className="text-orange">Parts</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl opacity-90">
              Browse our premium heavy-duty <br /> industrial parts catalogue.
            </p>
          </div>
        </section>

        <section className="py-10 bg-muted/40">
          <div className="container">
            <Card className="shadow-lg border border-orange/20">
              <CardContent className="p-6 grid md:grid-cols-5 gap-4 items-center">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search part number..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="pl-9"
                  />
                </div>

                <Select
                  value={selected.part_name_id || ""}
                  onValueChange={(v) => handleFilter("part_name_id", v)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Part Name" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    {filters.part_names.map((i: any) => (
                      <SelectItem key={i.id} value={String(i.id)}>
                        {i.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select
                  value={selected.machine_type_id || ""}
                  onValueChange={(v) => handleFilter("machine_type_id", v)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Machine Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    {filters.machine_types.map((i: any) => (
                      <SelectItem key={i.id} value={String(i.id)}>
                        {i.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select
                  value={selected.manufacturer_id || ""}
                  onValueChange={(v) => handleFilter("manufacturer_id", v)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Manufacturer" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    {filters.manufacturers.map((i: any) => (
                      <SelectItem key={i.id} value={String(i.id)}>
                        {i.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select
                  value={selected.model_id || ""}
                  onValueChange={(v) => handleFilter("model_id", v)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Model" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    {filters.models.map((i: any) => (
                      <SelectItem key={i.id} value={String(i.id)}>
                        {i.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Button
                  variant="outline"
                  onClick={resetFilters}
                  className="border-orange text-orange hover:bg-orange hover:text-white"
                >
                  <RotateCcw className="mr-2 h-4 w-4" />
                  Reset Filters
                </Button>

                <div className="md:col-span-5 flex flex-wrap items-center justify-between gap-4">
                  <p className="text-sm text-muted-foreground">
                    Showing
                    <span className="font-semibold text-navy mx-1">{products.length}</span>
                    of
                    <span className="font-semibold text-navy mx-1">{totalCount}</span>
                    cards
                  </p>

                  {activeFilterEntries.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {activeFilterEntries.map(([key, value]) => (
                        <Badge
                          key={key}
                          variant="secondary"
                          className="cursor-pointer bg-navy/10 text-navy hover:bg-navy hover:text-white"
                          onClick={() => removeFilter(key)}
                        >
                          {String(value)} x
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((item) => {
                const partNumbers = getPartNumbers(item);
                const isGroup = item.display_type === "group";
                const primaryPartNumber = getPrimaryPartNumber(item);

                return (
                  <Card
                    key={`${item.display_type || "single"}-${item.id}`}
                    className="group overflow-hidden rounded-xl border border-border hover:border-orange hover:shadow-xl transition-all duration-300"
                  >
                    <AspectRatio ratio={16 / 9}>
                      <div className="w-full h-full bg-white flex items-center justify-center overflow-hidden">
                        <img
                          src={item.image_url ? `${API_BASE}${item.image_url}` : "/images/prasco.webp"}
                          alt={primaryPartNumber}
                          onError={(event) => {
                            event.currentTarget.onerror = null;
                            event.currentTarget.src = "/images/prasco.webp";
                          }}
                          className="object-contain w-full h-full transition duration-500"
                        />
                      </div>
                    </AspectRatio>

                    <CardContent className="p-6">
                      <div className="flex justify-between items-start gap-3 mb-3">
                        <div>
                          <h3 className="text-lg font-semibold text-navy">{item.part_name}</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            {item.manufacturer} {item.machine_type} {item.model}
                          </p>
                        </div>

                        <div className="flex flex-col items-end gap-2">
                          <Badge
                            variant="secondary"
                            className="bg-navy/10 text-navy border-navy/20"
                          >
                            {isGroup ? "Group" : "Single"}
                          </Badge>
                          {item.part_group_name && (
                            <Badge variant="outline" className="text-xs">
                              {item.part_group_name}
                            </Badge>
                          )}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                          Part Numbers
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {partNumbers.slice(0, 4).map((partNumber) => (
                            <Badge key={partNumber} variant="secondary" className="bg-orange/10 text-orange border-orange/20">
                              {partNumber}
                            </Badge>
                          ))}
                          {partNumbers.length > 4 && (
                            <Badge variant="outline">+{partNumbers.length - 4} more</Badge>
                          )}
                        </div>
                      </div>

                      <Button
                        className="mt-5 w-full bg-orange hover:bg-orange/90"
                        onClick={() => navigate(`/products/${generateProductSlug(item)}`)}
                      >
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="flex justify-center items-center gap-6 mt-12">
              <Button
                variant="outline"
                disabled={page === 1}
                onClick={() => setPage(page - 1)}
              >
                Previous
              </Button>

              <span className="font-medium text-navy">
                Page {page} / {totalPages}
              </span>

              <Button
                variant="outline"
                disabled={page === totalPages}
                onClick={() => setPage(page + 1)}
              >
                Next
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Products;

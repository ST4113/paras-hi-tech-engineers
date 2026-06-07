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

// Generate SEO-friendly slug from product data
const generateProductSlug = (product: any): string => {
  const parts = [
    product.manufacturer?.toLowerCase().replace(/[^a-z0-9]/g, '-'),
    product.machine_type?.toLowerCase().replace(/[^a-z0-9]/g, '-'),
    product.model?.toLowerCase().replace(/[^a-z0-9]/g, '-'),
    product.part_name?.toLowerCase().replace(/[^a-z0-9]/g, '-'),
    product.part_number?.toLowerCase().replace(/[^a-z0-9]/g, '-'),
    product.id.toString()
  ].filter(Boolean);

  return parts.join('-').replace(/-+/g, '-').replace(/^-|-$/g, '');
};

const Products: React.FC = () => {

  const [products, setProducts] = useState<any[]>([]);
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

  const normalizePartNumber = (value: string) => {
    return value.replace(/[^a-zA-Z0-9]/g, "");
  };

  const fetchCatalog = async () => {

    const params = new URLSearchParams();

    if (search) {
      const normalizedSearch = normalizePartNumber(search);
      params.append("search", normalizedSearch);
    }
    if (selected.machine_type_id)
      params.append("machine_type_id", selected.machine_type_id);
    if (selected.manufacturer_id)
      params.append("manufacturer_id", selected.manufacturer_id);
    if (selected.model_id) params.append("model_id", selected.model_id);
    if (selected.part_name_id)
      params.append("part_name_id", selected.part_name_id);

    params.append("page", page.toString());

    const res = await fetch(`${API_BASE}/public/catalog?${params}`);
    const data = await res.json();

    setProducts(data.products.items);
    setFilters(data.filters);
    setTotalPages(data.products.total_pages);
    setTotalCount(data.products.total);
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
  const [totalCount, setTotalCount] = useState(0);

  const resetFilters = () => {
    setSelected({});
    setSearch("");
    setPage(1);
  };

  const getLabel = (type: string, id: string) => {

    const map: any = {
      machine_type_id: filters.machine_types,
      manufacturer_id: filters.manufacturers,
      model_id: filters.models,
      part_name_id: filters.part_names,
    };

    const found = map[type]?.find((i: any) => String(i.id) === String(id));
    return found?.name || "";

  };

  const removeFilter = (key: string) => {

    setSelected((prev: any) => {
      const updated = { ...prev };
      delete updated[key];
      return updated;
    });

    setPage(1);

  };

  return (

    <div className="min-h-screen flex flex-col">

      <Helmet>
        <title>Industrial Machine Parts | Paras Hi-Tech</title>
      </Helmet>

      <Navbar />

      <main className="flex-grow">

        {/* HERO */}

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
              Browse our premium heavy-duty <br/> industrial parts catalogue.
            </p>
          </div>

        </section>

        {/* FILTERS */}

        <section className="py-10 bg-muted/40">

          <div className="container">

            <Card className="shadow-lg border border-orange/20">

              <CardContent className="p-6 grid md:grid-cols-5 gap-4 items-center">

                {/* SEARCH */}

                <div className="relative">

                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />

                  <Input
                    placeholder="Search part number..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="pl-9"
                  />

                </div>


                {/* PART NAME */}

                 <Select
                  value={selected.part_name || ""}
                  onValueChange={(v) => handleFilter("part_name", v)}
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

                {/* MACHINE TYPE */}

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

                {/* MANUFACTURER */}

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

                {/* MODEL */}

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
                

                {/* RESET */}

                <Button
                  variant="outline"
                  onClick={resetFilters}
                  className="border-orange text-orange hover:bg-orange hover:text-white"
                >

                  <RotateCcw className="mr-2 h-4 w-4" />

                  Reset Filters

                </Button>

              
              {/* <div className="container mb-6 flex items-center justify-between flex-wrap gap-4"> */}

                <p className="text-sm text-muted-foreground">
                  Showing
                  <span className="font-semibold text-navy mx-1">
                    {products.length}
                  </span>
                  of
                  <span className="font-semibold text-navy mx-1">
                    {totalCount}
                  </span>
                  parts
                </p>

              {/* </div> */}
              </CardContent>

            </Card>



          </div>


        </section>


        {/* PRODUCTS */}

        <section className="py-16">

          <div className="container">

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

              {products.map((item: any) => (

                <Card
                  key={item.id}
                  className="group overflow-hidden rounded-xl border border-border hover:border-orange hover:shadow-xl transition-all duration-300"
                >

                  <AspectRatio ratio={16 / 9}>
                    <div className="w-full h-full bg-white flex items-center justify-center overflow-hidden">
                      <img
                        src={item.image_url ? `${API_BASE}${item.image_url}` : "/images/prasco.webp"}
                        alt={item.part_number}
                        onError={(event) => {
                          event.currentTarget.onerror = null;
                          event.currentTarget.src = "/images/prasco.webp";
                        }}
                        className="object-contain w-full h-full transition duration-500"
                      />
                    </div>
                  </AspectRatio>

                  <CardContent className="p-6">

                    <div className="flex justify-between items-center mb-2">

                      <h3 className="text-lg font-semibold text-navy">
                        {item.part_number}
                      </h3>

                      <Badge
                        variant="secondary"
                        className="bg-navy/10 text-navy border-navy/20"
                      >

                        {item.part_name}

                      </Badge>

                    </div>

                  

                    <p className="text-sm text-muted-foreground">
                      {item.manufacturer} {item.machine_type} {item.model}
                    </p>

                  

                    <Button
                      className="mt-4 w-full bg-orange hover:bg-orange/90"
                      onClick={() => navigate(`/products/${generateProductSlug(item)}`)}
                    >

                      View Details

                    </Button>

                  </CardContent>

                </Card>

              ))}

            </div>

            {/* PAGINATION */}

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
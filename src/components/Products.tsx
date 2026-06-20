import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface ProductCategory {
  title: string;
  image: string;
}

const productCategories: ProductCategory[] = [
  {
    title: "Engine Spares",
    image: "/images/engine-spares.webp"
  },
  {
    title: "Engine Gaskets",
    image: "/images/engine-gasket.webp"
  },
  {
    title: "Radiators and Hydraulic Oil Cooler",
    image: "/images/radiator-cooler.webp"
  },
  {
    title: "AC Spares",
    image: "/images/AC-spares.webp"
  },
  {
    title: "Mining Truck Body Spares",
    image: "/images/body-parts.webp"
  },
  {
    title: "Industrial Electrical Components",
    image: "/images/electrical.webp"
  }
];

interface FeaturedProduct {
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
  is_featured?: boolean;
  is_display?: boolean;
  machine_type?: string;
  manufacturer?: string;
  model?: string;
  part_name?: string;
}

const getPrimaryProductId = (product: FeaturedProduct): number =>
  product.product_id ?? product.id;

const getPartNumbers = (product: FeaturedProduct): string[] => {
  if (Array.isArray(product.part_numbers) && product.part_numbers.length > 0) {
    return product.part_numbers;
  }
  return product.part_number ? [product.part_number] : [];
};

const getPrimaryPartNumber = (product: FeaturedProduct): string =>
  getPartNumbers(product)[0] || "part";

const AutoSlider: React.FC = () => {
  const [featuredProducts, setFeaturedProducts] = useState<FeaturedProduct[]>([]);
  const navigate = useNavigate();
  const API_BASE = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const res = await fetch(`${API_BASE}/public/featured-products`);
        const data = await res.json();

        if (Array.isArray(data.items) && data.items.length > 0) {
          setFeaturedProducts(data.items);
        }
      } catch (error) {
        console.error("Failed to load featured products:", error);
      }
    };

    fetchFeaturedProducts();
  }, [API_BASE]);

  const generateProductSlug = (product: FeaturedProduct) => {
    const parts = [
      product.manufacturer?.toLowerCase().replace(/[^a-z0-9]/g, "-"),
      product.machine_type?.toLowerCase().replace(/[^a-z0-9]/g, "-"),
      product.model?.toLowerCase().replace(/[^a-z0-9]/g, "-"),
      product.part_name?.toLowerCase().replace(/[^a-z0-9]/g, "-"),
      getPrimaryPartNumber(product).toLowerCase().replace(/[^a-z0-9]/g, "-"),
      String(getPrimaryProductId(product))
    ].filter(Boolean);

    return parts.join("-").replace(/-+/g, "-").replace(/^-|-$/g, "");
  };

  const getImageUrl = (imageUrl: string | null | undefined) =>
    imageUrl ? `${API_BASE}${imageUrl}` : "/images/prasco.webp";

  const featuredCards = featuredProducts.length > 0 ? [...featuredProducts, ...featuredProducts] : [];

  return (
    <>
      <section className="py-10 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Products
            </h2>
            <p className="max-w-2xl mx-auto text-sm text-muted-foreground">
              Explore our main product categories and find the right parts for your industrial equipment.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-[1.25fr_1fr]">

            {/* LEFT COLUMN */}
            <div className="grid gap-4">

              {/* ENGINE SPARES */}
              <div className="group relative overflow-hidden rounded-3xl shadow-xl shadow-black/10 transition-all duration-700 hover:-translate-y-1 hover:shadow-black/20 md:min-h-[26rem]">

                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={productCategories[0].image}
                    alt={productCategories[0].title}
                    loading="lazy"
                    className="h-full w-full object-contain p-4 transition duration-700 transform scale-95 group-hover:scale-100"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                </div>

                <div className="relative flex h-full flex-col justify-end p-5">
                  <h3 className="mt-3 text-2xl md:text-3xl font-bold text-white leading-tight">
                    {productCategories[0].title}
                  </h3>
                </div>
              </div>

              {/* BOTTOM SMALL CARDS */}
              <div className="grid gap-4 md:grid-cols-2">
                {[productCategories[4], productCategories[5]].map((item, idx) => (
                  <div
                    key={`left-bottom-${idx}`}
                    className="group relative overflow-hidden rounded-3xl shadow-xl shadow-black/10 transition-all duration-700 hover:-translate-y-1 hover:shadow-black/20 md:min-h-[14rem]"
                  >
                    <div className="absolute inset-0 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="h-full w-full object-contain p-0 transition duration-700 transform scale-95 group-hover:scale-100"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                    </div>

                    <div className="relative flex h-full flex-col justify-end p-5">


                      <h3 className="mt-3 text-lg font-semibold text-white leading-tight">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="grid gap-4">

              <div className="grid gap-4 md:grid-cols-2">
                {[productCategories[1], productCategories[2]].map((item, idx) => (
                  <div
                    key={`top-right-${idx}`}
                    className="group relative overflow-hidden rounded-3xl shadow-xl shadow-black/10 transition-all duration-700 hover:-translate-y-1 hover:shadow-black/20 md:min-h-[14rem]"
                  >
                    <div className="absolute inset-0 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="h-full w-full object-contain p-4 transition duration-700 transform scale-95 group-hover:scale-100"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                    </div>

                    <div className="relative flex h-full flex-col justify-end p-5">


                      <h3 className="mt-3 text-lg font-semibold text-white leading-tight">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>

              {/* AC SPARES */}
              <div className="group relative overflow-hidden rounded-3xl shadow-xl shadow-black/10 transition-all duration-700 hover:-translate-y-1 hover:shadow-black/20 md:min-h-[20rem]">

                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={productCategories[3].image}
                    alt={productCategories[3].title}
                    loading="lazy"
                    className="h-full w-full object-contain p-4 transition duration-700 transform scale-95 group-hover:scale-100"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                </div>

                <div className="relative flex h-full flex-col justify-end p-5">


                  <h3 className="mt-3 text-xl font-semibold text-white leading-tight">
                    {productCategories[3].title}
                  </h3>


                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background overflow-hidden">
        <div className="relative w-full">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Products</h2>
          </div>

          {featuredCards.length > 0 ? (
            <div className="animate-scroll flex w-max gap-6 px-6">
              {featuredCards.map((item: any, index: number) => {
                const imageSrc = getImageUrl(item.image_url);
                const title = `${item.part_name} - ${item.model}`;
                const partNumbers = getPartNumbers(item);
                const subtitle = `${item.manufacturer} ${item.machine_type}`;

                return (
                  <div
                    key={`${item.id}-${index}`}
                    className="w-[300px] h-[350px] flex-shrink-0 border border-border rounded-2xl overflow-hidden bg-white shadow-sm transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
                    onClick={() => navigate(`/products/${generateProductSlug(item)}`)}
                  >
                    <div className="h-[200px] w-full bg-white overflow-hidden flex items-center justify-center">
                      <img
                        src={imageSrc}
                        alt={title}
                        loading="lazy"
                        onError={(event) => {
                          event.currentTarget.onerror = null;
                          event.currentTarget.src = "/images/prasco.webp";
                        }}
                        className="w-full h-full object-contain transition duration-500"
                      />
                    </div>
                    <div className="p-4 text-left h-[150px] flex flex-col justify-between">
                      <div>
                        <h3 className="font-bold text-lg text-foreground leading-snug line-clamp-2">{title}</h3>
                        <p className="text-sm text-muted-foreground mt-3 line-clamp-1">{subtitle}</p>
                        {partNumbers.length > 0 && (
                          <p className="text-xs text-muted-foreground mt-2 font-semibold line-clamp-2">
                            Part No: {partNumbers.join(", ")}
                          </p>
                        )}
                        {item.part_group_name && (
                          <p className="text-xs text-orange mt-2 font-medium line-clamp-1">
                            Group: {item.part_group_name}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="rounded-3xl border border-border bg-white p-12 text-center text-muted-foreground shadow-sm">
              Featured products are loading or unavailable. Please check back soon.
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default AutoSlider;

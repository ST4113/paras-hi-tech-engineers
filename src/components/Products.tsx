import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const productCategories = [
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

  const cards = featuredProducts.length > 0
    ? [...featuredProducts, ...featuredProducts]
    : [...productCategories, ...productCategories];

  return (
    <section className="py-16 bg-background overflow-hidden">
      <div className="relative w-full">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Products</h2>
        </div>

        <div className="animate-scroll flex w-max gap-6 px-6">
          {cards.map((item: any, index: number) => {
            const isFeaturedCard = featuredProducts.length > 0;
            const imageSrc = isFeaturedCard ? getImageUrl(item.image_url) : item.image;
            const title = isFeaturedCard ? `${item.part_name} - ${item.model}` : item.title;
            const partNumbers = isFeaturedCard ? getPartNumbers(item) : [];
            const subtitle = isFeaturedCard
              ? `${item.manufacturer} ${item.machine_type}`
              : null;

            return (
              <div
                key={isFeaturedCard ? `${item.id}-${index}` : `static-${index}`}
                className="w-[300px] h-[350px] flex-shrink-0 border border-border rounded-2xl overflow-hidden bg-white shadow-sm transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
                onClick={() => {
                  if (!isFeaturedCard) return;
                  navigate(`/products/${generateProductSlug(item)}`);
                }}
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
                    {subtitle && <p className="text-sm text-muted-foreground mt-3 line-clamp-1">{subtitle}</p>}
                    {isFeaturedCard && partNumbers.length > 0 && (
                      <p className="text-xs text-muted-foreground mt-2 font-semibold line-clamp-2">
                        Part No.: {partNumbers.join(", ")}
                      </p>
                    )}
                    {isFeaturedCard && item.part_group_name && (
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
      </div>
    </section>
  );
};

export default AutoSlider;

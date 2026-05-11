import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { motion } from "framer-motion";

const API_BASE = import.meta.env.VITE_API_BASE_URL;

interface Product {
  id: number;
  part_number: string;
  machine_type: string;
  manufacturer: string;
  model: string;
  part_name: string;
  sku: string;
  image_url: string;
}

const ProductDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [zoom, setZoom] = useState({ active: false, x: 0, y: 0, left: 0, top: 0 });
  const imageContainerRef = React.useRef<HTMLDivElement | null>(null);

  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    mobile_number: "",
    message: ""
  });

  // Extract ID from slug (last part after the last hyphen)
  const productId = slug ? slug.split('-').pop() : null;

  useEffect(() => {
    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  const fetchProduct = async () => {
    try {
      const res = await fetch(`${API_BASE}/public/product?id=${productId}`);
      const data = await res.json();
      setProduct(data.product);
    } catch (error) {
      console.error('Failed to fetch product:', error);
    }
  };

  // Generate SEO slug from product data
  const generateSlug = (product: Product): string => {
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

  // Generate SEO metadata
  const generateSEOMetadata = (product: Product) => {
    const title = `${product.manufacturer} ${product.machine_type} ${product.part_name} (Part No: ${product.part_number}) | Paras Hi-Tech Engineers`;

    const description = `Buy genuine ${product.manufacturer} ${product.machine_type} ${product.part_name} part number ${product.part_number} from Paras Hi-Tech Engineers. High quality heavy equipment spare parts for excavators, loaders, dozers and more.`;

    const keywords = [
      product.part_number,
      product.machine_type,
      product.manufacturer,
      product.model,
      product.part_name,
      'industrial spare parts',
      'heavy equipment parts',
      'construction machinery parts',
      'excavator parts',
      'loader parts',
      'dozer parts'
    ].join(', ');

    const canonicalUrl = `${window.location.origin}/products/${generateSlug(product)}`;
    const imageUrl = product.image_url ? `${API_BASE}${product.image_url}` : `${window.location.origin}/images/prasco.webp`;

    return {
      title,
      description,
      keywords,
      canonicalUrl,
      imageUrl
    };
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!form.name.trim()) return "Full name is required";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      return "Please enter a valid email address";
    if (form.mobile_number.length < 10 || form.mobile_number.length > 15)
      return "Mobile number must be 10–15 digits";
    return "";
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(`${API_BASE}/inquiries/product`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: form.name,
          company: form.company,
          email: form.email,
          mobile_number: form.mobile_number,
          machine_type: product?.machine_type,
          manufacturer: product?.manufacturer,
          model: product?.model,
          part_name: product?.part_name,
          part_number: product?.part_number,
          comments: form.message
        })
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Failed to send inquiry. Please try again.");

      setSuccess("Thank you! Our team will contact you within 24 hours.");
      setForm({
        name: "",
        company: "",
        email: "",
        mobile_number: "",
        message: ""
      });

    } catch (error: any) {
      setError(error.message || "Failed to send inquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!product) return <div className="p-20 text-center">Loading...</div>;

  const seoData = generateSEOMetadata(product);
  const productImageUrl = product.image_url ? `${API_BASE}${product.image_url}` : "/images/prasco.webp";

  const inputClass = `
    w-full
    rounded-xl
    border border-slate-200
    bg-slate-50
    px-4 py-3
    text-navy
    placeholder:text-slate-400
    focus:bg-white
    focus:border-navy
    focus:ring-2
    focus:ring-navy/20
    outline-none
    transition
  `;

  // Generate structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `${product.manufacturer} ${product.machine_type} ${product.part_name}`,
    "description": `Genuine ${product.manufacturer} ${product.part_name} for ${product.machine_type} ${product.model}. Part number: ${product.part_number}`,
    "brand": {
      "@type": "Brand",
      "name": product.manufacturer
    },
    "sku": product.sku || product.part_number,
    "image": seoData.imageUrl,
    "category": `${product.machine_type} Parts`,
    "manufacturer": product.manufacturer,
    "model": product.model,
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Paras Hi-Tech Engineers"
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">

      <Helmet>
        {/* Basic Meta Tags */}
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <link rel="canonical" href={seoData.canonicalUrl} />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:image" content={seoData.imageUrl} />
        <meta property="og:url" content={seoData.canonicalUrl} />
        <meta property="og:type" content="product" />
        <meta property="og:site_name" content="Paras Hi-Tech Engineers" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="twitter:image" content={seoData.imageUrl} />

        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Paras Hi-Tech Engineers" />
        <meta name="language" content="English" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <Navbar />

      <main className="flex-grow">

        {/* Hero */}

        <section
          className="relative flex items-center justify-center bg-gradient py-12 sm:py-16 md:py-20 px-4"

        >
          <div className="text-center text-white max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Product <span className="text-orange">Details</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl opacity-90">
              {product.manufacturer} {product.machine_type} {product.part_name}
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">

            <div className="grid md:grid-cols-3 gap-8 items-stretch">

              <Card className="h-full md:col-span-2">
                <CardContent className="p-8 flex flex-col h-full">

                  <h2 className="text-2xl font-semibold text-navy mb-6">
                    Product Details
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6 items-center">

                    {/* Product Image */}
                    <div
                      ref={imageContainerRef}
                      className="border rounded-lg p-4 bg-white flex justify-center items-center min-h-[320px] md:min-h-[420px] overflow-hidden relative"
                      onMouseEnter={() => setZoom((prev) => ({ ...prev, active: true }))}
                      onMouseMove={(event) => {
                        if (!imageContainerRef.current) return;
                        const rect = imageContainerRef.current.getBoundingClientRect();
                        const x = Math.max(0, Math.min(100, ((event.clientX - rect.left) / rect.width) * 100));
                        const y = Math.max(0, Math.min(100, ((event.clientY - rect.top) / rect.height) * 100));
                        const left = Math.min(rect.width - 200, Math.max(0, event.clientX - rect.left - 100));
                        const top = Math.min(rect.height - 200, Math.max(0, event.clientY - rect.top - 100));
                        setZoom({ active: true, x, y, left, top });
                      }}
                      onMouseLeave={() => setZoom((prev) => ({ ...prev, active: false }))}
                    >
                      <img
                        src={productImageUrl}
                        alt={`${product.manufacturer} ${product.machine_type} ${product.part_name} - Part ${product.part_number}`}
                        onError={(event) => {
                          event.currentTarget.onerror = null;
                          event.currentTarget.src = "/images/prasco.webp";
                        }}
                        className="w-full max-w-full max-h-[520px] object-contain bg-white"
                      />

                      {zoom.active && (
                        <div
                          className="pointer-events-none absolute h-48 w-48 rounded-2xl border border-slate-200 bg-white/10 shadow-2xl"
                          style={{
                            left: zoom.left,
                            top: zoom.top,
                            backgroundImage: `url(${productImageUrl})`,
                            backgroundSize: `250% 250%`,
                            backgroundPosition: `${zoom.x}% ${zoom.y}%`,
                            backgroundRepeat: 'no-repeat'
                          }}
                        />
                      )}
                    </div>

                    {/* Product Info */}
                    <div className="space-y-4 text-gray-700">

                      <div className="grid grid-cols-1 gap-3">
                        <div className="flex justify-between py-2 border-b border-gray-100">
                          <span className="font-semibold text-navy">Part Number:</span>
                          <span className="text-gray-800">{product.part_number}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-gray-100">
                          <span className="font-semibold text-navy">Machine Type:</span>
                          <span className="text-gray-800">{product.machine_type}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-gray-100">
                          <span className="font-semibold text-navy">Manufacturer:</span>
                          <span className="text-gray-800">{product.manufacturer}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-gray-100">
                          <span className="font-semibold text-navy">Model:</span>
                          <span className="text-gray-800">{product.model}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-gray-100">
                          <span className="font-semibold text-navy">Part Name:</span>
                          <span className="text-gray-800">{product.part_name}</span>
                        </div>

                      </div>



                    </div>

                  </div>

                </CardContent>
              </Card>

              {/* Inquiry Form */}
              <Card className="h-full">
                <CardContent className="
                  max-w-xl
                  mx-auto
                  bg-white
                  rounded-3xl
                  border border-slate-100
                  shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)]
                  p-10
                  relative
                  overflow-hidden
                  flex flex-col h-full
                ">
                  {/* Top accent */}
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-navy via-blue-800 to-navy" />

                  {/* Header */}
                  <div className="mb-8">
                    <h3 className="text-3xl font-bold text-navy tracking-tight">
                      Product Inquiry
                    </h3>
                    <p className="text-navy/70 text-sm mt-2">
                      Inquire about this product and we’ll get back to you shortly.
                    </p>
                  </div>

                  {/* Alerts */}
                  {error && (
                    <div className="mb-4 rounded-lg bg-red-50 text-red-700 px-4 py-2 text-sm">
                      {error}
                    </div>
                  )}

                  {success && (
                    <div className="mb-4 rounded-lg bg-green-50 text-green-700 px-4 py-2 text-sm">
                      {success}
                    </div>
                  )}

                  {/* Form */}
                  <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="space-y-5 flex flex-col flex-grow"
                  >
                    <input
                      name="name"
                      placeholder="Full Name *"
                      value={form.name}
                      onChange={handleChange}
                      className={inputClass}
                      required
                    />

                    <input
                      name="company"
                      placeholder="Company (optional)"
                      value={form.company}
                      onChange={handleChange}
                      className={inputClass}
                    />

                    <input
                      name="email"
                      type="email"
                      placeholder="Email Address *"
                      value={form.email}
                      onChange={handleChange}
                      className={inputClass}
                      required
                    />

                    <input
                      name="mobile_number"
                      placeholder="Mobile Number *"
                      value={form.mobile_number}
                      onChange={handleChange}
                      className={inputClass}
                      required
                    />

                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Message (optional)"
                      value={form.message}
                      onChange={handleChange}
                      className={`${inputClass} resize-none`}
                    />

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="
                        w-full
                        mt-6
                        bg-gradient-to-r from-navy to-blue-900
                        text-white
                        py-3.5
                        rounded-xl
                        font-semibold
                        tracking-wide
                        shadow-lg
                        hover:shadow-xl
                        hover:-translate-y-[1px]
                        active:translate-y-0
                        transition
                        disabled:opacity-60
                      "
                    >
                      {loading ? "Sending..." : "Submit Inquiry"}
                    </button>
                  </motion.form>
                </CardContent>
              </Card>

            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;

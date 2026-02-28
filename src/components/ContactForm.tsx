import { useState } from "react";
import { motion } from "framer-motion";

const API_BASE = import.meta.env.VITE_API_BASE_URL;

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    mobile_number: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

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

  const handleSubmit = async (e: React.FormEvent) => {
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

      const res = await fetch(`${API_BASE}/leads`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");

      setSuccess("Thank you! Our team will contact you within 24 hours.");
      setForm({
        name: "",
        company: "",
        email: "",
        mobile_number: "",
        message: "",
      });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

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

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="
        max-w-xl
        mx-auto
        bg-white
        rounded-3xl
        border border-slate-100
        shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)]
        p-10
        relative
        overflow-hidden
      "
    >
      {/* Top accent */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-navy via-blue-800 to-navy" />

      {/* Header */}
      <div className="mb-8">
        <h3 className="text-3xl font-bold text-navy tracking-tight">
          Send us a Message
        </h3>
        <p className="text-navy/70 text-sm mt-2">
          Share your requirements and we’ll get back to you shortly.
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

      {/* Fields */}
      <div className="space-y-5">
        <input
          name="name"
          placeholder="Full Name *"
          value={form.name}
          onChange={handleChange}
          className={inputClass}
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
        />

        <input
          name="mobile_number"
          placeholder="Mobile Number *"
          value={form.mobile_number}
          onChange={handleChange}
          className={inputClass}
        />

        <textarea
          name="message"
          rows={4}
          placeholder="Message (optional)"
          value={form.message}
          onChange={handleChange}
          className={`${inputClass} resize-none`}
        />
      </div>

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
        {loading ? "Sending..." : "Submit Enquiry"}
      </button>
    </motion.form>
  );
};

export default ContactForm;
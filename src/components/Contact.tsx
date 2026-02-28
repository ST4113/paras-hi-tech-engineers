import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import WhatsappIcon from "@/components/ui/WhatsappIcon";
import ContactForm from './ContactForm';


const Contact = () => {
  return (
    <section className="pt-12 pb-28 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ===== TOP SECTION (Info + Form) ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch min-h-[560px]">
          
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-10 h-full flex flex-col justify-between"
          >
            <div>
              <h2 className="text-4xl font-bold text-navy">Get in Touch</h2>
              <p className="text-navy/80 text-lg leading-relaxed mt-4">
                Reach out to us for inquiries, support, or collaboration opportunities.
                We're happy to assist!
              </p>

              <div className="space-y-6 mt-10">
                {[
                  {
                    icon: Mail,
                    title: "Email",
                    value: "info@parashitech.in",
                    link: "mailto:info@parashitech.in",
                  },
                  {
                    icon: Phone,
                    title: "Phone",
                    value: "+91 9712442299",
                    link: "tel:+91 9712442299",
                  },
                  {
                    icon: MapPin,
                    title: "Address",
                    value:
                      "55, Ashwamegh Industrial Estate, Sarkhej-Bavla Rd, Changodar, Gujarat 382210",
                  },
                ].map(({ icon: Icon, title, value, link }, i) => (
                  <div key={i} className="flex items-start space-x-5">
                    <div className="bg-navy p-3 rounded-xl text-white shadow-md flex items-center justify-center w-12 h-12">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-navy mb-1">
                        {title}
                      </h4>
                      {link ? (
                        <a
                          href={link}
                          className="text-navy/80 hover:underline"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-navy/80">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Response pinned to bottom */}
            <div className="bg-navy rounded-2xl p-6 shadow-lg mt-8">
              <h4 className="text-xl font-bold text-white mb-3">
                Quick Response
              </h4>
              <p className="text-white/80 mb-5">
                Our team will get back to you within 24 hours on business days.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:info@parashitech.in"
                  className="border border-white text-white px-6 py-2 rounded-lg font-medium hover:bg-white hover:text-navy transition"
                >
                  Send Email
                </a>
                <a
                  href="tel:+919712442299"
                  className="border border-white text-white px-6 py-2 rounded-lg font-medium hover:bg-white hover:text-navy transition"
                >
                  Call Now
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <div className="h-full flex items-stretch">
            <ContactForm />
          </div>
        </div>

        {/* ===== GAP BETWEEN FORM SECTION & MAP ===== */}
        <div className="mt-24" />

        {/* ===== MAP SECTION ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden shadow-2xl bg-card h-[520px] lg:h-[600px]"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.691461045592!2d72.44717167512047!3d22.924748419972023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e91a2d93ff273%3A0x1466ceb6671e9ccd!2sParas%20Hi%20Tech%20Engineers!5e0!3m2!1sen!2sin!4v1754145407057!5m2!1sen!2sin"
            className="w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Paras Hi Tech Engineers Location"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

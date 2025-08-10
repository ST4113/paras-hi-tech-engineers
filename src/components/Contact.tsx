import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import WhatsappIcon from "@/components/ui/WhatsappIcon";


const Contact = () => {
    return (
        <section className="pt-8 pb-24 bg-gradient-to-b from-slate-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Contact Details */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        className="space-y-10"
                    >
                        <h2 className="text-4xl font-bold text-navy">Get in Touch</h2>
                        <p className="text-navy/80 text-lg leading-relaxed">
                            Reach out to us for inquiries, support, or collaboration opportunities. We're happy to assist!
                        </p>

                        <div className="space-y-6">
                            {[
                                {
                                    icon: Mail,
                                    title: 'Email',
                                    value: 'info@parashitech.in',
                                    link: 'mailto:info@parashitech.in',
                                },
                                {
                                    icon: Phone,
                                    title: 'Phone',
                                    value: '+91 9712442299',
                                    link: 'tel:+91 9712442299',
                                },
                                {
                                    icon: () => (
                                        <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M3.50002 12C3.50002 7.30558 7.3056 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C10.3278 20.5 8.77127 20.0182 7.45798 19.1861C7.21357 19.0313 6.91408 18.9899 6.63684 19.0726L3.75769 19.9319L4.84173 17.3953C4.96986 17.0955 4.94379 16.7521 4.77187 16.4751C3.9657 15.176 3.50002 13.6439 3.50002 12ZM12 1.5C6.20103 1.5 1.50002 6.20101 1.50002 12C1.50002 13.8381 1.97316 15.5683 2.80465 17.0727L1.08047 21.107C0.928048 21.4637 0.99561 21.8763 1.25382 22.1657C1.51203 22.4552 1.91432 22.5692 2.28599 22.4582L6.78541 21.1155C8.32245 21.9965 10.1037 22.5 12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5ZM14.2925 14.1824L12.9783 15.1081C12.3628 14.7575 11.6823 14.2681 10.9997 13.5855C10.2901 12.8759 9.76402 12.1433 9.37612 11.4713L10.2113 10.7624C10.5697 10.4582 10.6678 9.94533 10.447 9.53028L9.38284 7.53028C9.23954 7.26097 8.98116 7.0718 8.68115 7.01654C8.38113 6.96129 8.07231 7.046 7.84247 7.24659L7.52696 7.52195C6.76823 8.18414 6.3195 9.2723 6.69141 10.3741C7.07698 11.5163 7.89983 13.314 9.58552 14.9997C11.3991 16.8133 13.2413 17.5275 14.3186 17.8049C15.1866 18.0283 16.008 17.7288 16.5868 17.2572L17.1783 16.7752C17.4313 16.5691 17.5678 16.2524 17.544 15.9269C17.5201 15.6014 17.3389 15.308 17.0585 15.1409L15.3802 14.1409C15.0412 13.939 14.6152 13.9552 14.2925 14.1824Z" />
                                        </svg>
                                    ),
                                    title: 'WhatsApp',
                                    value: '+91 9712442299',
                                    link: 'https://wa.me/919712442299?text=Hi%20Paras%20Hi%20Tech%20Engineers%2C%20I\'m%20interested%20in%20your%20products.',
                                },
                                {
                                    icon: MapPin,
                                    title: 'Address',
                                    value: (
                                        <>
                                            55, Ashwamegh Industrial Estate, Sarkhej-Bavla Rd, Changodar, Gujarat 382210
                                        </>
                                    ),
                                },
                            ].map(({ icon: Icon, title, value, link }, i) => (
                                <div key={i} className="flex items-start space-x-5">
                                    <div className="bg-navy p-3 rounded-xl text-white shadow-md flex items-center justify-center w-12 h-12">
                                        {/* Ensure icon color is white, not orange */}
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-navy mb-1">{title}</h4>
                                        {link ? (
                                            <a href={link} className="text-navy/80 hover:underline">
                                                {value}
                                            </a>
                                        ) : (
                                            <p className="text-navy/80">{value}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="bg-navy rounded-2xl p-6 shadow-lg">
                            <h4 className="text-xl font-bold text-white mb-3">Quick Response</h4>
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

                    {/* Map */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
                        viewport={{ once: true }}
                        className="rounded-3xl overflow-hidden shadow-xl bg-card h-[450px] lg:h-full"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.691461045592!2d72.44717167512047!3d22.924748419972023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e91a2d93ff273%3A0x1466ceb6671e9ccd!2sParas%20Hi%20Tech%20Engineers!5e0!3m2!1sen!2sin!4v1754145407057!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="KEMO Steel Industries Location"
                            className="w-full h-full"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

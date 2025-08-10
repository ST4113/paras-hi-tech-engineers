import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        {/* Hero Banner */}
        <section 
          className="relative flex items-center justify-center bg-cover bg-center bg-no-repeat py-20 sm:py-24 md:py-32 px-4"
          style={{
            backgroundImage: 'url("/images/hero-contact.webp")',
          }}
        >
          <div className="text-center text-white max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Contact <span className="text-orange">Us</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl opacity-90">
              Your Machinery, Our Mission <br/> Precision Parts with Personalized Support.
            </p>
          </div>
        </section>

        <div>
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Packages from "../components/Packages";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import OwnerProfile from "../components/OwnerProfile";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <OwnerProfile />
      <Packages />
      <Gallery />
      <Contact />
      <Testimonials />
      <Footer />
    </>
  );
}

import { ParallaxEffect } from "../components/homePageComponent/ParallaxEffect";
import img from "../assets/homePageImages/home-page.jpg";

import { AboutUs } from "../components/homePageComponent/AboutUs";
import { Accommodation } from "../components/homePageComponent/Accommodation";
import { Facilities } from "../components/homePageComponent/Facilities";
import { Gallery } from "../components/homePageComponent/Gallery";
import { Testimonial } from "../components/homePageComponent/Testimonial";
import { ContactUs } from "../components/homePageComponent/ContactUs";
import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp Icon

export function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen px-4 md:px-20 lg:px-40  pt-[12vh]">
        {/* Logo Section (Responsive Height) */}
        <div className="flex h-12 md:h-16 lg:h-36 justify-center items-center">
          <h1>Property-logo</h1>
        </div>

        <ParallaxEffect img={img} />
      </div>

      {/* Sections with Responsive Spacing */}
      <div className="mt-10 md:mt-20" id="aboutus">
        <AboutUs />
      </div>

      <div className="mt-10 md:mt-20" id="accommodation">
        <Accommodation />
      </div>

      <div id="facilities">
        <Facilities />
      </div>

      <div id="gallery">
        <Gallery />
      </div>

      <div className="mb-20 px-4 md:px-20 lg:px-40 py-10">
        <ParallaxEffect img={img} height="min-h-[100vh] md:min-h-[150vh]">
          <Testimonial />
        </ParallaxEffect>
      </div>

      <div id="contact">
        <ContactUs />
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="z-99 fixed bottom-4 left-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all"
      >
        <FaWhatsapp className="text-3xl" />
      </a>
    </>
  );
}

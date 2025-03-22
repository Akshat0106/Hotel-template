import { ParallaxEffect } from "../components/homePageComponent/ParallaxEffect";
import img from "../assets/homePageImages/home-page.jpg";

import { AboutUs } from "../components/homePageComponent/AboutUs";
import { Accommodation } from "../components/homePageComponent/Accommodation";
import { Facilities } from "../components/homePageComponent/Facilities";
import { Gallery } from "../components/homePageComponent/Gallery";
import { Testimonial } from "../components/homePageComponent/Testimonial";
import { ContactUs } from "../components/homePageComponent/ContactUs";

// import './../../index.css';

export function Home() {
  return (
    <>
      <div className="flex flex-col h-screen px-60">
        {/* Logo Section (Fixed Height) */}
        <div className="flex h-16 justify-center items-center md:h-36">
          <h1>Voco Farms-logo</h1>
        </div>

        <ParallaxEffect img={img} />
      </div>
      {/*  About Us Section */}

      <div className="mt-20">
        <AboutUs />
      </div>

      <div className="mt-20">
        <Accommodation />
      </div>

      <div>
        <Facilities />
      </div>

      <div>
        <Gallery />
      </div>

      <div className="mb-30 px-60 py-10">
        <ParallaxEffect img={img} height="h-[100vh]">
          <Testimonial />
        </ParallaxEffect>
      </div>

      <div>
        <ContactUs/>
      </div>
    </>
  );
}

{
  /* Image Section (Fixed Height & Responsive) */
}
{
  /* <div className="flex h-[50vh] justify-center w-full md:h-[100vh] overflow-hidden sm:h-[50vh]">
    <img
      src="src/assets/homePageImages/home-page.jpg"
      alt="Home-page"
      className="h-full w-auto object-cover sm:w-full"
    />
  </div> */
}

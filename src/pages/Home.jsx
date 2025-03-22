// import { ParallaxEffect } from "../components/homePageComponent/ParallaxEffect";
// import img from "../assets/homePageImages/home-page.jpg";

// import { AboutUs } from "../components/homePageComponent/AboutUs";
// import { Accommodation } from "../components/homePageComponent/Accommodation";
// import { Facilities } from "../components/homePageComponent/Facilities";
// import { Gallery } from "../components/homePageComponent/Gallery";
// import { Testimonial } from "../components/homePageComponent/Testimonial";
// import { ContactUs } from "../components/homePageComponent/ContactUs";


// export function Home() {
//   return (
//     <>
//       <div className="flex flex-col h-screen px-60">
//         {/* Logo Section (Fixed Height) */}
//         <div className="flex h-16 justify-center items-center md:h-36">
//           <h1>Voco Farms-logo</h1>
//         </div>

//         <ParallaxEffect img={img} />
//       </div>
//       {/*  About Us Section */}

//       <div className="mt-20">
//         <AboutUs />
//       </div>

//       <div className="mt-20">
//         <Accommodation />
//       </div>

//       <div>
//         <Facilities />
//       </div>

//       <div>
//         <Gallery />
//       </div>

//       <div className="mb-30 px-60 py-10">
//         <ParallaxEffect img={img} height="h-[100vh]">
//           <Testimonial />
//         </ParallaxEffect>
//       </div>

//       <div>
//         <ContactUs/>
//       </div>
//     </>
//   );
// }

import { ParallaxEffect } from "../components/homePageComponent/ParallaxEffect";
import img from "../assets/homePageImages/home-page.jpg";

import { AboutUs } from "../components/homePageComponent/AboutUs";
import { Accommodation } from "../components/homePageComponent/Accommodation";
import { Facilities } from "../components/homePageComponent/Facilities";
import { Gallery } from "../components/homePageComponent/Gallery";
import { Testimonial } from "../components/homePageComponent/Testimonial";
import { ContactUs } from "../components/homePageComponent/ContactUs";

export function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen px-4 md:px-20 lg:px-40">
        {/* Logo Section (Responsive Height) */}
        <div className="flex h-12 md:h-16 lg:h-36 justify-center items-center">
          <h1>Property-logo</h1>
        </div>

        <ParallaxEffect img={img} />
      </div>

      {/* Sections with Responsive Spacing */}
      <div className="mt-10 md:mt-20">
        <AboutUs />
      </div>

      <div className="mt-10 md:mt-20">
        <Accommodation />
      </div>

      <div>
        <Facilities />
      </div>

      <div>
        <Gallery />
      </div>

      <div className="mb-20 px-4 md:px-20 lg:px-40 py-10">
        <ParallaxEffect img={img} height="min-h-[100vh] md:min-h-[150vh]">
          <Testimonial />
        </ParallaxEffect>
      </div>

      <div>
        <ContactUs />
      </div>
    </>
  );
}

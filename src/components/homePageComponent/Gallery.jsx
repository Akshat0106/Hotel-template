// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import { Pagination, Navigation } from 'swiper/modules';

// // Import images
// // import img1 from '../../assets/homePageImages/image1.jpg';
// // import img2 from '../../assets/homePageImages/image2.jpg';
// // import img3 from '../../assets/homePageImages/image3.jpg';
// // import img4 from '../../assets/homePageImages/image4.jpg';
// // import img5 from '../../assets/homePageImages/image5.jpg';
// // import img6 from '../../assets/homePageImages/image6.jpg';
// // import img7 from '../../assets/homePageImages/image7.jpg';
// // import img8 from '../../assets/homePageImages/image8.jpg';
// // import img9 from '../../assets/homePageImages/image9.jpg';
// // import img10 from '../../assets/homePageImages/image10.jpg';
// import img from '../../assets/homePageImages/home-page.jpg'


// export function Gallery() {
//   // const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
//   const images = [img, img, img, img, img, img, img, img];

//   // Group images into sets of 6 (3 columns × 2 rows)
//   const groupedImages = [];
//   for (let i = 0; i < images.length; i += 6) {
//     groupedImages.push(images.slice(i, i + 6));
//   }

//   return (
//     <div className="container mx-auto px-60 bg-white py-8">
//       <h1 className="text-center text-3xl font-light mb-8">GALLERY</h1>
//       <Swiper
//         slidesPerView={1} // Show only 1 slide (each slide contains 6 images)
//         spaceBetween={20}
//         pagination={{ clickable: true }}
//         navigation
//         modules={[Pagination, Navigation]}
//         className="mySwiper"
//       >
//         {groupedImages.map((group, index) => (
//           <SwiperSlide key={index}>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-2 gap-4">
//               {group.map((src, imgIndex) => (
//                 <img key={imgIndex} src={src} alt={`Gallery ${imgIndex + 1}`} className="w-full h-auto rounded-lg" />
//               ))}
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }




// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import { Pagination, Navigation } from 'swiper/modules';

// // Import images
// import img from '../../assets/homePageImages/home-page.jpg';

// export function Gallery() {
//   const images = [img, img, img, img, img, img, img, img];

//   // Group images into sets of 6 (default: 3 columns × 2 rows)
//   const groupedImages = [];
//   for (let i = 0; i < images.length; i += 6) {
//     groupedImages.push(images.slice(i, i + 6));
//   }

//   return (
//     <div className="container mx-auto px-4 md:px-60 bg-white py-8">
//       <h1 className="text-center text-3xl font-light mb-8">GALLERY</h1>
//       <Swiper
//         slidesPerView={1} // Show only 1 slide (each slide contains 6 images)
//         spaceBetween={20}
//         pagination={{ clickable: true }}
//         navigation
//         modules={[Pagination, Navigation]}
//         className="mySwiper"
//       >
//         {groupedImages.map((group, index) => (
//           <SwiperSlide key={index}>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-2 gap-4">
//               {group.map((src, imgIndex) => (
//                 <img key={imgIndex} src={src} alt={`Gallery ${imgIndex + 1}`} className="w-full h-auto rounded-lg" />
//               ))}
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
// Import images
import img from '../../assets/homePageImages/home-page.jpg';

export function Gallery() {
  const images = [img, img, img, img, img, img, img]; // 7 images
  
  // Group images differently based on screen size
  // For mobile: 2 images per slide (1 column × 2 rows)
  // For larger screens: 6 images per slide (3 columns × 2 rows)
  
  // Mobile grouping (2 images per slide)
  const mobileGroupedImages = [];
  for (let i = 0; i < images.length; i += 2) {
    mobileGroupedImages.push(images.slice(i, i + 2));
  }
  
  // Desktop grouping (6 images per slide)
  const desktopGroupedImages = [];
  for (let i = 0; i < images.length; i += 6) {
    desktopGroupedImages.push(images.slice(i, i + 6));
  }

  // Use React's useState and useEffect to handle responsive behavior
  const [isMobile, setIsMobile] = React.useState(false);
  
  React.useEffect(() => {
    // Check if we're on mobile when component mounts
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640); // 640px is the sm breakpoint in Tailwind
    };
    
    // Initial check
    checkMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);
    
    // Cleanup event listener
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Use the appropriate grouping based on screen size
  const groupedImages = isMobile ? mobileGroupedImages : desktopGroupedImages;

  return (
    <div className="container mx-auto px-4 md:px-60 bg-white py-8">
      <h1 className="text-center text-3xl font-light mb-8">GALLERY</h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{ clickable: true }}
        navigation
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {groupedImages.map((group, index) => (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {group.map((src, imgIndex) => (
                <img
                  key={imgIndex}
                  src={src}
                  alt={`Gallery ${imgIndex + 1}`}
                  className="w-full h-auto rounded-lg"
                />
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

import LightGallery from 'lightgallery/react';

// Import LightGallery styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// Import plugins
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

// Import images
import img from '../../assets/homePageImages/home-page.jpg';

export function Gallery() {
  const images = [img, img, img, img, img, img, img]; // 7 images

  // Group images differently based on screen size
  const mobileGroupedImages = [];
  for (let i = 0; i < images.length; i += 2) {
    mobileGroupedImages.push(images.slice(i, i + 2));
  }
  
  const desktopGroupedImages = [];
  for (let i = 0; i < images.length; i += 6) {
    desktopGroupedImages.push(images.slice(i, i + 6));
  }

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const groupedImages = isMobile ? mobileGroupedImages : desktopGroupedImages;

  // LightGallery reference
  const lightboxRef = useRef(null);

  return (
    <div className="container mx-auto px-4 md:px-60 bg-white py-8">
      <h1 className="text-center text-3xl font-light mb-8">GALLERY</h1>
      
      {/* LightGallery Wrapper */}
      <LightGallery
        onInit={(ref) => (lightboxRef.current = ref)}
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        selector=".lightbox-item"  // Ensures it selects only valid items
        licenseKey="0000-0000-000-0000" // Suppress warning
      >
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
                  <a key={imgIndex} href={src} data-src={src} className="lightbox-item">
                    <img
                      src={src}
                      alt={`Gallery ${imgIndex + 1}`}
                      className="w-full h-auto rounded-lg cursor-pointer"
                    />
                  </a>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </LightGallery>
    </div>
  );
}

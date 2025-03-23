import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaWhatsapp } from "react-icons/fa"; // Importing WhatsApp icon

import img from '../assets/homePageImages/home-page.jpg';

const rooms = [
  {
    name: "Club Room",
    description: "Each of the 14 club rooms are built with unique elements, blending turquoise hues with elegant white walls.",
    amenities: ["LED", "King Size Bed", "EPABX", "Tea Coffee Maker", "Complimentary Breakfast", "Up To 3 Guests"],
    images: [img, img],
  },
  {
    name: "Club Room with Terrace & Jacuzzi",
    description: "Enjoy a private jacuzzi on the terrace with luxurious décor, soft beds, and a scenic Nilaya landscape view.",
    amenities: ["LED", "King Size Bed", "EPABX", "Tea Coffee Maker", "Complimentary Breakfast", "Up To 3 Guests", "Heated Jacuzzi", "Fruit Basket"],
    images: [img, img],
  },
  {
    name: "Premium Suite",
    description: "Spacious and elegant, the Premium Suite offers top-tier luxury with a king-size bed and an exclusive lounge area.",
    amenities: ["LED", "King Size Bed", "Tea Coffee Maker", "Complimentary Breakfast", "Lounge Area", "Up To 4 Guests"],
    images: [img, img],
  },
  {
    name: "Royal Villa",
    description: "Experience royalty with a private villa, complete with a personal garden, hot tub, and high-end furnishings.",
    amenities: ["LED", "Super King Bed", "Tea Coffee Maker", "Complimentary Breakfast", "Private Garden", "Hot Tub", "Up To 6 Guests"],
    images: [img, img],
  },
];

export function Room() {
  return (
    <div className="px-4 md:px-20 pt-[12vh] relative pb-24">
      {/* Room Types Heading */}
      <h1 className="text-3xl text-center mb-10">Room Types</h1>

      {/* Room List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        {rooms.map((room, index) => (
          <div key={index} className="flex flex-col md:flex-row items-start gap-6 md:gap-8 h-auto">
            
            {/* Image Slider - Improved height consistency */}
            <div className="w-full md:w-1/2 aspect-[4/3]">
              <Swiper 
                navigation={true} 
                modules={[Navigation]} 
                className="w-full h-full rounded-lg shadow-md"
              >
                {room.images.map((img, idx) => (
                  <SwiperSlide key={idx} className="w-full h-full flex items-center justify-center">
                    <img 
                      src={img} 
                      alt={room.name} 
                      className="h-full w-full object-cover rounded-lg" 
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Room Details */}
            <div className="w-full md:w-1/2 flex flex-col justify-center h-full">
              <h2 className="text-xl font-semibold mb-2">{room.name}</h2>
              <p className="text-gray-600 mb-4">{room.description}</p>

              {/* Amenities List */}
              <ul className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                {room.amenities.map((amenity, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span>✅</span> {amenity}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Buttons - Fixed position at bottom of viewport */}
      <div className="fixed bottom-6 left-0 right-0 flex justify-between px-6 md:px-12 z-50">
        {/* WhatsApp Button (Left) */}
        <a 
          href="https://wa.me/yourwhatsapplink" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-2 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:bg-green-600 transition-all"
        >
          <FaWhatsapp size={20} className="text-white" /> 
        </a>

        {/* Book Now Button (Right) */}
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all font-medium">
          Book Now
        </button>
      </div>
    </div>
  );
}
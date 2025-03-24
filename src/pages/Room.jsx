import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaWhatsapp } from "react-icons/fa";

import img from "../assets/homePageImages/home-page.jpg";

const rooms = [
  {
    name: "Club Room",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, blanditiis.",
    amenities: [
      "LED",
      "King Size Bed",
      "EPABX",
      "Tea Coffee Maker",
      "Complimentary Breakfast",
      "Up To 3 Guests",
    ],
    images: [img, img],
  },
  {
    name: "Club Room with Terrace & Jacuzzi",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, blanditiis.",
    amenities: [
      "LED",
      "King Size Bed",
      "EPABX",
      "Tea Coffee Maker",
      "Complimentary Breakfast",
      "Up To 3 Guests",
      "Heated Jacuzzi",
      "Fruit Basket",
    ],
    images: [img, img],
  },
  {
    name: "Premium Suite",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, blanditiis.",
    amenities: [
      "LED",
      "King Size Bed",
      "Tea Coffee Maker",
      "Complimentary Breakfast",
      "Lounge Area",
      "Up To 4 Guests",
    ],
    images: [img, img],
  },
  {
    name: "Royal Villa",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, blanditiis.",
    amenities: [
      "LED",
      "Super King Bed",
      "Tea Coffee Maker",
      "Complimentary Breakfast",
      "Private Garden",
      "Hot Tub",
      "Up To 6 Guests",
    ],
    images: [img, img],
  },
];



export function Room() {
  return (
    <div className="px-4 md:px-20 pt-[12vh] relative pb-24">
      <h1 className="text-3xl text-center mb-10">Room Types</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        {rooms.map((room, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-start gap-6 md:gap-8 h-auto"
          >
            {/* Image Slider - Increased Height for Mobile */}
            <div className="w-full md:w-1/2 overflow-hidden rounded-lg shadow-md">
              <Swiper
                navigation={true}
                modules={[Navigation]}
                className="w-full h-full"
              >
                {room.images.map((img, idx) => (
                  <SwiperSlide key={idx} className="w-full">
                    <div className="w-full h-96 md:h-80">
                      <img
                        src={img}
                        alt={room.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
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

      {/* Floating Buttons */}
      <div className="fixed bottom-6 left-0 right-0 flex justify-between px-6 md:px-12 z-50">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/yourwhatsapplink"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:bg-green-600 transition-all"
        >
          <FaWhatsapp size={20} className="text-white" />
        </a>

        {/* Floating Book Now Button */}
        <button className="fixed top-1/2 right-4 md:right-10 -translate-y-1/2 bg-blue-600 text-white px-5 py-3 md:px-6 md:py-4 rounded-full shadow-lg hover:bg-blue-700 transition-all font-medium z-50">
          Book Now
        </button>
      </div>
    </div>
  );
}

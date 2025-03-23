import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import img from '../../assets/homePageImages/home-page.jpg'
import { useNavigate } from "react-router-dom";
const rooms = [
  {
    name: "Club Room",
    images: [img, img],
  },
  {
    name: "Club Room with Terrace & Jacuzzi",
    images: [img, img],
  },
  {
    name: "Club Room with Terrace & Jacuzzi",
    images: [img, img],
  },
  {
    name: "Club Room with Terrace & Jacuzzi",
    images: [img, img],
  },
];

export function Accommodation() {
  const navi=useNavigate()

  const roomNavi=()=>{
      navi('/room')
  }
  return (
    <div className="px-10 md:px-20 lg:px-40 mb-20">
      <h1 className="text-center text-3xl mb-10">
        Accommodation
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {rooms.map((room, index) => (
          <div key={index} className="flex flex-col items-center">
            <Swiper
              navigation
              modules={[Navigation]}
              className="h-64 w-full rounded-lg"
            >
              {room.images.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={img}
                    alt={room.name}
                    className="h-64 w-full object-cover rounded-lg"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <h2 className="mt-4 text-lg font-semibold">{room.name}</h2>

            <button className="mt-4 border border-black px-6 py-2 rounded-lg hover:bg-nav-fixed hover:text-white transition-all" onClick={roomNavi}>
              View More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

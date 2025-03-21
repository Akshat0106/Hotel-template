import { PiMapPinAreaBold } from "react-icons/pi";
import { MdOutlineDoorSliding } from "react-icons/md";
import { MdOutlineContacts } from "react-icons/md";

// Social media
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaSquareYoutube } from "react-icons/fa6";


export function ContactUs() {
  return (
    <>
      <div className="px-60 py-10">
        <h1 className="text-3xl text-center mb-8">Contact</h1>
        <div className="grid grid-cols-3 gap-10">
          {/* Contact-card */}
          <div className="grid-rows-1 bg-nav-fixed h-74 p-10 rounded-xl w-85 hover:bg-red-300 place-items-center">
            <PiMapPinAreaBold className="h-14 text-white w-20" />
            <h1 className="text-white text-xl font-comic mt-4">Address</h1>
            <div className="text-center text-md text-white mt-5">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Lorem, ipsum dolor.</p>
            </div>
          </div>

          <div className="grid-rows-1 bg-nav-fixed h-74 p-10 rounded-xl w-85 hover:bg-red-300 place-items-center">
            <MdOutlineDoorSliding className="h-14 text-white w-20" />
            <h1 className="text-white text-xl font-comic mt-4">Reservation</h1>
            <div className="text-center text-md text-white mt-5">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Lorem, ipsum dolor.</p>
              <p>Lorem, ipsum dolor.</p>
            </div>
          </div>

          <div className="grid-rows-1 bg-nav-fixed h-74 p-10 rounded-xl w-85 hover:bg-red-300 place-items-center">
            <MdOutlineContacts className="h-14 text-white w-20" />
            <h1 className="text-white text-xl font-comic mt-4">Contact</h1>
            <div className="text-center text-md text-white mt-5">
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>

        {/* contact form */}
        <div className="grid grid-cols-1 place-items-center">
          <div className="grid grid-rows-5 w-full gap-10 mt-10 px-70">
            <input
              type="text"
              placeholder="Your Name"
              className="border-b-2 w-full"
            />
            <input
              type="text"
              placeholder="Your Email"
              className="border-b-2 w-full"
            />
            <input
              type="text"
              placeholder="Mobile No."
              className="border-b-2 w-full"
            />
            <input
              type="text"
              placeholder="Message"
              className="border-b-2 w-full"
            />
            <div>
              <button className="border-b-2 w-full cursor-pointer">
                Submit
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <FaSquareInstagram className="h-10 text-nav-fixed w-14 cursor-pointer hover:text-red-300" />
          <FaSquareWhatsapp className="h-10 text-nav-fixed w-14 cursor-pointer hover:text-red-300" />
          <FaSquareYoutube className="h-10 text-nav-fixed w-14 cursor-pointer hover:text-red-300" />
        </div>

      </div>
      <div className="w-full my-1">
        <iframe
          className="h-96 w-full lg:h-[600px] md:h-[500px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.8655011804153!2d72.89023277497827!3d19.113555482098764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c92d5e58cdc9%3A0x94c2dec7f68a1d1b!2sBoomerang%20Building!5e0!3m2!1sen!2sin!4v1740981511034!5m2!1sen!2sin"
          loading="lazy"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}

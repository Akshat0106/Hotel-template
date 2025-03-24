import img from "../assets/homePageImages/home-page.jpg";
import { ContactUs } from "../components/homePageComponent/ContactUs";
import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp Icon

export function Events() {
  return (
    <div className="pt-0">
      {/* Image Grid with Reduced Height for Mobile */}
      <div className="grid grid-cols-4 gap-2">
        {[...Array(4)].map((_, index) => (
          <img
            key={index}
            src={img}
            alt={`Event ${index + 1}`}
            className="h-[200px] sm:h-[350px] md:h-[500px] lg:h-[700px] w-full object-cover"
          />
        ))}
      </div>

      {/* Content Section */}
      <div className="px-4 md:px-12 lg:px-40 py-6 md:py-10">
        <div className="text-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl mb-3 md:mb-5 font-semibold">
            Lorem, ipsum dolor.
          </h1>
          <div className="text-sm sm:text-base md:text-lg leading-relaxed">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              incidunt delectus obcaecati ad veniam, tenetur molestiae odit
              facilis, laborum maiores autem nam eaque possimus repellendus.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              provident quam porro? Delectus, quo labore eum repellendus ratione
              aliquid voluptates.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact">
        <ContactUs />
      </div>

      {/* Floating Buttons */}
      <div className="fixed bottom-4 left-4 right-4 flex justify-between items-center z-50">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/yourwhatsapplink"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-green-500 text-white px-4 py-3 md:py-4 rounded-full shadow-lg hover:bg-green-600 transition-all"
        >
          <FaWhatsapp size={24} className="text-white" />
        </a>

        {/* Floating "Book Now" Button */}
        <button className="fixed bottom-16 md:bottom-20 right-4 md:right-10 bg-blue-600 text-white px-5 py-3 md:px-6 md:py-4 rounded-full shadow-lg hover:bg-blue-700 transition-all font-medium">
          Book Now
        </button>
      </div>
    </div>
  );
}

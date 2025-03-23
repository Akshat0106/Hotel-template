import img from "../assets/homePageImages/home-page.jpg";

import { ContactUs } from "../components/homePageComponent/ContactUs";


export function Events() {
  return (
    <div className="pt-0">
      <div className="grid grid-cols-4 gap-2">
        <img
          src={img}
          alt="Event 2"
          className="h-[700px] w-full object-cover"
        />
        <img
          src={img}
          alt="Event 1"
          className="h-[700px] w-full object-cover"
        />
        <img
          src={img}
          alt="Event 3"
          className="h-[700px] w-full object-cover"
        />
        <img
          src={img}
          alt="Event 4"
          className="h-[700px] w-full object-cover"
        />
      </div>
      <div className="px-4 md:px-20 lg:px-40 py-10">
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl mb-5 font-semibold">
            Lorem, ipsum dolor.
          </h1>
          <div className="text-base md:text-lg leading-relaxed">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              incidunt delectus obcaecati ad veniam, tenetur molestiae odit
              facilis, laborum maiores autem nam eaque possimus repellendus.
              Illum accusantium doloribus provident aliquam distinctio
              cupiditate consequuntur modi sed asperiores debitis, repellat
              ipsam, ratione sint ab at maxime! Laboriosam adipisci illum iste
              facilis maxime.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              provident quam porro? Delectus, quo labore eum repellendus ratione
              aliquid voluptates. Quibusdam rerum atque itaque suscipit
              reiciendis voluptates voluptate dolore molestiae perspiciatis
              natus! Officia, quo. Dolores obcaecati neque animi blanditiis, ex
              atque aspernatur ipsa beatae rerum quod. Dolore nisi placeat quos!
            </p>
          </div>
        </div>
      </div>
      <div id="contact">
        <ContactUs />
      </div>
    </div>
  );
}

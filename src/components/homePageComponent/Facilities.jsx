import { IoRestaurantOutline } from "react-icons/io5";

export function Facilities() {
  return (
    <>
      <div className="text-center font-poppins px-60 py-10">
        <div className="text-3xl mb-5">
          <h1 className="">Our Facilities</h1>
        </div>

        {/* cards */}
        <div className="grid grid-cols-3 font-comic my-20">
            <div className="grid grid-cols-1 bg-white h-70 p-10 shadow-lg w-90 rounded-xl place-items-center">
                <div><IoRestaurantOutline className="h-14 w-20" /></div>
                <h1 className="my-8">Restaurant</h1>
                <p className="text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, beatae?</p>
            </div>
        </div>

      </div>
    </>
  );
}

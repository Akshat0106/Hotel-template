import { useState } from "react";
import { BiMessageRoundedDetail } from "react-icons/bi";

export function Testimonial() {
  const Testimonial_data = [
    {
      // img: dp1,
      context_text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "John Doe",
      //   designation: "Advocate",
    },
    {
      // img: dp2,
      context_text:
        "1Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "Jane Doe",
      //   designation: "Advocate",
    },
  ];

  const [current, setCurrent] = useState(0);
  const length = Testimonial_data.length;

  function previous() {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }
  function next() {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }

  return (
    <div>
      <section className="flex bg-white h-80 justify-center p-6 w-screen items-center md:w-150 md:p-20">
        <div className="w-full max-w-2xl">
          {Testimonial_data.map(
            (item, index) =>
              index === current && (
                <div key={index}>
                  {/* User Info */}
                  <div className="flex flex-col gap-4 items-center justify-center md:flex-row">
                    <div className="text-center font-medium">
                      <h6 className="text-xl">{item.name}</h6>
                    </div>
                  </div>
                  <div className="flex justify-center my-5">
                    <BiMessageRoundedDetail className="h-14 w-20" />
                  </div>
                  {/* Testimonial Text */}
                  <div className="text-center pb-6 mt-4">
                    <p className="text-sm">{item.context_text}</p>
                  </div>

                  {/* Buttons */}
                  {/* <div className="flex flex-col justify-between items-center md:flex-row md:items-end"> */}

                  {/* Navigation Buttons */}
                  <div className="flex gap-0 justify-end">
                    <button
                      onClick={previous}
                      className="p-3 rounded-md text-white md:p-4 transition"
                    >
                      ◀
                    </button>
                    <button
                      onClick={next}
                      className="p-3 rounded-md text-white md:p-4 transition"
                    >
                      ▶
                    </button>
                  </div>
                </div>
                // </div>
              )
          )}
        </div>
      </section>
    </div>
  );
}

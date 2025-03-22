// import { useState } from "react";
// import { BiMessageRoundedDetail } from "react-icons/bi";

// export function Testimonial() {
//   const Testimonial_data = [
//     {
//       // img: dp1,
//       context_text:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//       name: "John Doe",
//       //   designation: "Advocate",
//     },
//     {
//       // img: dp2,
//       context_text:
//         "1Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//       name: "Jane Doe",
//       //   designation: "Advocate",
//     },
//   ];

//   const [current, setCurrent] = useState(0);
//   const length = Testimonial_data.length;

//   function previous() {
//     setCurrent(current === 0 ? length - 1 : current - 1);
//   }
//   function next() {
//     setCurrent(current === length - 1 ? 0 : current + 1);
//   }

//   return (
//     <div>
//       <section className="flex bg-white h-80 justify-center p-6 w-screen items-center md:w-150 md:p-20">
//         <div className="w-full max-w-2xl">
//           {Testimonial_data.map(
//             (item, index) =>
//               index === current && (
//                 <div key={index}>
//                   {/* User Info */}
//                   <div className="flex flex-col gap-4 items-center justify-center md:flex-row">
//                     <div className="text-center font-medium">
//                       <h6 className="text-xl">{item.name}</h6>
//                     </div>
//                   </div>
//                   <div className="flex justify-center my-5">
//                     <BiMessageRoundedDetail className="h-14 w-20" />
//                   </div>
//                   {/* Testimonial Text */}
//                   <div className="text-center pb-6 mt-4">
//                     <p className="text-sm">{item.context_text}</p>
//                   </div>

//                   {/* Buttons */}
//                   {/* <div className="flex flex-col justify-between items-center md:flex-row md:items-end"> */}

//                   {/* Navigation Buttons */}
//                   <div className="flex gap-0 justify-end">
//                     <button
//                       onClick={previous}
//                       className="p-3 rounded-md text-white md:p-4 transition"
//                     >
//                       ◀
//                     </button>
//                     <button
//                       onClick={next}
//                       className="p-3 rounded-md text-white md:p-4 transition"
//                     >
//                       ▶
//                     </button>
//                   </div>
//                 </div>
//                 // </div>
//               )
//           )}
//         </div>
//       </section>
//     </div>
//   );
// }

import { useState } from "react";
import { BiMessageRoundedDetail } from "react-icons/bi";

export function Testimonial() {
  const testimonialData = [
    {
      context_text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "John Doe",
    },
    {
      context_text:
        "1Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "Jane Doe",
    },
  ];

  const [current, setCurrent] = useState(0);
  const length = testimonialData.length;

  function previous() {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }
  
  function next() {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }

  return (
    <div className="w-full flex justify-center">
      <section className="flex bg-white justify-center items-center w-full max-w-6xl px-4 py-12 sm:py-16 md:py-20">
        <div className="w-full max-w-2xl mx-auto">
          {testimonialData.map(
            (item, index) =>
              index === current && (
                <div key={index} className="flex flex-col">
                  {/* Quote Icon */}
                  <div className="flex justify-center mb-6">
                    <BiMessageRoundedDetail className="text-blue-500 h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14" />
                  </div>
                  
                  {/* Testimonial Text */}
                  <div className="text-center mb-8">
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg italic">"{item.context_text}"</p>
                  </div>
                  
                  {/* User Info */}
                  <div className="text-center mb-8">
                    <h6 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-900">{item.name}</h6>
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex justify-center gap-4">
                    <button
                      onClick={previous}
                      className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      aria-label="Previous testimonial"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={next}
                      className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      aria-label="Next testimonial"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                  
                  {/* Indicator Dots */}
                  <div className="flex justify-center mt-6 gap-2">
                    {testimonialData.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrent(idx)}
                        className={`h-2 w-2 rounded-full transition-all duration-300 ${
                          idx === current ? "bg-blue-500 w-4" : "bg-gray-300"
                        }`}
                        aria-label={`Go to testimonial ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              )
          )}
        </div>
      </section>
    </div>
  );
}
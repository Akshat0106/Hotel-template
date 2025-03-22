// import { IoRestaurantOutline } from "react-icons/io5";

// const facilities = [
//   {
//     id: 1,
//     title: "Restaurant 1",
//     description:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, beatae?",
//   },
//   {
//     id: 2,
//     title: "Restaurant 2",
//     description:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, beatae?",
//   },
//   {
//     id: 3,
//     title: "Restaurant 3",
//     description:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, beatae?",
//   },
//   {
//     id: 4,
//     title: "Restaurant 4",
//     description:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, beatae?",
//   },
//   {
//     id: 5,
//     title: "Restaurant 5",
//     description:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, beatae?",
//   },
//   {
//     id: 6,
//     title: "Restaurant 6",
//     description:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, beatae?",
//   },
//   {
//     id: 7,
//     title: "Restaurant 7",
//     description:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, beatae?",
//   },
//   {
//     id: 8,
//     title: "Restaurant 8",
//     description:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, beatae?",
//   },
//   {
//     id: 9,
//     title: "Restaurant 9",
//     description:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, beatae?",
//   },
//   {
//     id: 10,
//     title: "Restaurant 10",
//     description:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, beatae?",
//   },
//   {
//     id: 11,
//     title: "Restaurant 11",
//     description:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, beatae?",
//   },
//   {
//     id: 12,
//     title: "Restaurant 12",
//     description:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, beatae?",
//   },
//   {
//     id: 13,
//     title: "Restaurant 13",
//     description:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, beatae?",
//   },
//   {
//     id: 14,
//     title: "Restaurant 14",
//     description:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, beatae?",
//   },
// ];

// export function Facilities() {
//   return (
//     <>
//       <div className="text-center font-poppins px-60 py-10">
//         <div className="text-3xl mb-5">
//           <h1 className="">Our Facilities</h1>
//         </div>

//         {/* cards */}
//         <div className="grid grid-rows gap-10">
//           <div className="grid grid-cols-3 font-comic gap-10">
//             {facilities.map((facility) => (
//               <div
//                 key={facility.id}
//                 className="grid grid-cols-1 bg-white h-70 p-10 rounded-xl shadow-lg w-80 place-items-center"
//               >
//                 <div>
//                   <IoRestaurantOutline className="h-14 w-20" />
//                 </div>
//                 <h1 className="my-8">{facility.title}</h1>
//                 <p className="text-sm">{facility.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


import { IoRestaurantOutline } from "react-icons/io5";

const facilities = [
  { id: 1, title: "Restaurant 1", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
  { id: 2, title: "Restaurant 2", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
  { id: 3, title: "Restaurant 3", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
  { id: 4, title: "Restaurant 4", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
  { id: 5, title: "Restaurant 5", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
  { id: 6, title: "Restaurant 6", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
  { id: 7, title: "Restaurant 7", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
  { id: 8, title: "Restaurant 8", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
  { id: 9, title: "Restaurant 9", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
  { id: 10, title: "Restaurant 10", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
  { id: 11, title: "Restaurant 11", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
  { id: 12, title: "Restaurant 12", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
  { id: 13, title: "Restaurant 13", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
  { id: 14, title: "Restaurant 14", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
];

export function Facilities() {
  return (
    <div className="text-center font-poppins px-4 md:px-20 lg:px-40 py-10">
      <h1 className="text-2xl md:text-3xl font-semibold mb-5">Our Facilities</h1>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {facilities.map((facility) => (
          <div
            key={facility.id}
            className="bg-white min-h-[250px] p-6 rounded-xl shadow-lg w-full sm:w-72 md:w-80 mx-auto flex flex-col items-center"
          >
            <IoRestaurantOutline className="h-14 w-20 text-gray-700" />
            <h1 className="my-4 text-lg font-medium">{facility.title}</h1>
            <p className="text-base md:text-sm text-gray-600">{facility.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

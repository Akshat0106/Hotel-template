export function Accomodation() {
  return (
    <>
      <div className="px-60 mb-30">
        <div className="text-center mb-10">
          <div className="text-3xl mb-5">
            <h1 className="">Accomodation</h1>
          </div>
          <div className="text-md">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consectetur, asperiores? Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Molestiae, inventore. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Provident, laborum Lorem ipsum,
              dolor sit amet consectetur adipisicing elit. Optio, quaerat.
            </p>
          </div>
        </div>
        {/* room cards */}
        <div className="grid grid-cols-1 place-items-center ">
            <div className="h-80 w-80 bg-gray-200"></div>
            <h1 className="mt-4">Club Room</h1>
            <div className="">
              <button className="mt-10 bg-white">View More</button>
            </div>
        </div>
      </div>
    </>
  );
}

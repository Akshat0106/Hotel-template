// function Footer(){
//     return (
//         <>
//         <div className="h-20 w-full bg-nav-fixed text-white py-4">
//             <div className="flex items-center justify-center gap-5">
//                 <p>© Highway King Resorts and Infrastructure. All Rights Reserved.</p>
//                 <p className="border-b-2"><a href="#">Privacy Policy.</a></p>
//             </div>
//         </div> 
//         </>
//     )
// }

// export default Footer

function Footer() {
    return (
      <footer className="w-full bg-nav-fixed text-white py-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 text-sm md:text-base">
          <p>© Highway King Resorts and Infrastructure. All Rights Reserved.</p>
          <p>
            <a href="#" className="border-b-2 border-transparent hover:border-red-300 hover:text-red-300 transition">
              Privacy Policy
            </a>
          </p>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  
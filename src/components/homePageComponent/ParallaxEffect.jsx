// import img from '../../assets/homePageImages/home-page.jpg'

export function ParallaxEffect({ img, children, height = "h-[100vh]" }) {
    return (
      <div
        className={`relative ${height} flex flex-col items-center justify-center bg-cover bg-center bg-fixed overflow-x-hidden`}
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        {/* Background Overlay */}
        {/* <div className="bg-black/50 absolute inset-0"></div> */}
  
        {/* Foreground Content */}
        <div className="text-center px-4 relative z-10">{children}</div>
      </div>
    );
  }
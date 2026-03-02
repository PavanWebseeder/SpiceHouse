const Hero = () => {
    // return(
    //     <div className="w-screen h-[220px] sm:h-[300px] md:h-[400px] lg:h-[600px] overflow-hidden">
    //         <img src="public\Screenshot 2026-02-28 124159.png"
    //         className="w-full h-full"></img>
    //     </div>
    // ); 
    return (
    <div className="mt-2  relative w-screen h-screen overflow-hidden">

      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/foods\3196094-uhd_3840_2160_25fps.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="absolute inset-0 bg-black/50"></div>

 
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 text-center">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-wide"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Spice House
        </h1>

        <p
          className="mt-4 text-lg text-center sm:text-xl md:text-2xl max-w-2xl"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Discover the best food & drinks crafted with authentic spices
        </p>

        <button className="mt-7 bg-blue-500 px-3 py-3 rounded-full cursor-pointer">View Menu</button>
      </div>

    </div>
  ); 
};

export default Hero;
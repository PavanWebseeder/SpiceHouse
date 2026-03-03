const Hero = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">

      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/foods/3196094-uhd_3840_2160_25fps.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Modern gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 text-center mt-10">
        <h1
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-wide drop-shadow-lg"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Spice House
        </h1>

        <p
          className="mt-6 text-lg text-center sm:text-xl md:text-2xl max-w-2xl text-gray-200 drop-shadow-md"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Discover the best food & drinks crafted with authentic spices
        </p>

        <button className="mt-10 bg-amber-600 hover:bg-amber-700 text-white font-semibold text-lg px-8 py-4 rounded-full cursor-pointer transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-600/30">
          View Menu
        </button>
      </div>

    </div>
  );
};

export default Hero;
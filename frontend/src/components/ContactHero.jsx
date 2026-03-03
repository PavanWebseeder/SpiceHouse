const ContactHero = () => {
  return (
    <div className="relative w-screen h-[40vh] md:h-[60vh] overflow-hidden">
      <img
        src="/foods/pexels-pixabay-326278.jpg"
        className="absolute top-0 left-0 w-full h-full object-cover"
        alt="Contact Us Hero"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 text-center">
        <h2
          className="text-5xl md:text-7xl font-bold tracking-wide drop-shadow-lg"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Contact Us
        </h2>
        <div className="w-32 h-1 bg-amber-500 rounded mt-6"></div>
      </div>
    </div>
  );
};

export default ContactHero;

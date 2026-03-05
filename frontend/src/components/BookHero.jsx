
const BookHero = () => {
  return (
    <div className="relative w-full h-[40vh] md:h-[60vh] overflow-hidden">

      <img
        src="\foods\img7.jpg"
        className="absolute top-0 left-0 w-full h-full object-cover"
        alt="About Us Hero"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 text-center">
        <h2
          className="text-5xl md:text-7xl font-bold tracking-wide drop-shadow-lg"
          style={{ fontFamily: 'var(--font-heading)' }}>
          Reserve a Table
        </h2>
        <div className="w-40 h-1 bg-amber-500 rounded mt-6"></div>
      </div>

    </div>
  );
};

export default BookHero;
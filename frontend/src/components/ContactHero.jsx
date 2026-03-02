const ContactHero = () => {
  return (
    <div className="mt-5">
      <div className="relative md:h-[400px] h-[200px]">
        <img
          src="/foods/pexels-pixabay-326278.jpg"
          className="w-full h-full object-cover"
          alt="About"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <h2
          className="absolute inset-0 flex items-center justify-center
                   text-white md:text-5xl text-2xl font-bold z-10"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Contact Us
        </h2>
      </div>
    </div>
  );
};

export default ContactHero;

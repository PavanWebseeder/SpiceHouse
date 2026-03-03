const AboutContent = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 mt-28">

      <div className="text-center mb-16">
        <h2
          className="text-4xl font-bold text-amber-600 mb-2"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Our Story
        </h2>
        <div className="w-24 h-1 bg-amber-500 mx-auto rounded"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative h-[480px] overflow-hidden rounded-2xl shadow-xl shadow-amber-900/10">
          <video
            src="/foods/16664748-hd_1080_1920_25fps.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        <div
          className="text-gray-700 space-y-6 text-lg"
          style={{ fontFamily: "var(--font-body)" }}
        >
          <p className="leading-relaxed font-light">
            Spice House is a place where authentic flavors come alive through
            carefully crafted recipes and fresh ingredients. Our dishes are
            inspired by traditional cooking methods and rich spices that bring
            comfort and taste together.
          </p>
          <p className="leading-relaxed font-light">
            Every meal is prepared with attention to quality, aroma, and
            balance. We believe food should not only satisfy hunger but also
            create lasting memories that stay with you long after the meal.
          </p>

          <p className="leading-relaxed font-light">
            From sourcing ingredients to serving each plate, our journey is
            driven by passion and dedication. At Spice House, every bite tells a
            story of tradition, warmth, and love for food.
          </p>
        </div>
      </div>



      <div className="text-center my-20">
        <h2
          className="text-4xl font-bold text-amber-600 mb-2"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Our Food
        </h2>
        <div className="w-24 h-1 bg-amber-500 mx-auto rounded"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-28">

        <div
          className="text-gray-700 space-y-6 text-lg lg:order-1 order-2"
          style={{ fontFamily: "var(--font-body)" }}
        >
          <p className="leading-relaxed font-light">
            At Spice House, our food is a celebration of rich flavors and
            authentic spices. Each dish is thoughtfully prepared using fresh,
            high-quality ingredients that bring out deep aromas and balanced
            tastes. We follow time-honored recipes while adding our own touch to
            create food that feels both traditional and exciting.
          </p>

          <p className="leading-relaxed font-light">
            Our menu is inspired by diverse culinary influences, carefully
            curated to offer something for everyone. From comforting classics to
            bold, flavorful specialties, every plate reflects our passion for
            cooking. We focus on consistency and quality, ensuring that every
            visit delivers the same great taste you love.
          </p>

          <p className="leading-relaxed font-light">
            Food at Spice House is more than just a meal—it’s an experience
            meant to be shared and enjoyed. Whether you’re dining in, taking
            food home, or ordering for delivery, we prepare each dish with care
            and attention to detail. Our goal is to serve food that leaves you
            satisfied and eager to return.
          </p>
        </div>
        <div className="relative h-[480px] overflow-hidden rounded-2xl shadow-xl shadow-amber-900/10 lg:order-2 order-1">
          <img
            src="/foods/img2.jpg"
            alt="Our Food"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutContent;

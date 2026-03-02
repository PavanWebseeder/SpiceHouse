const food = import.meta.glob("../public/foods/*.{png,jpg,jpeg,webp}", {
  eager: true,
});
const Gallery = () => {
  const images = [
    "/foods/img1.jpg",
    "/foods/img2.jpg",
    "/foods/img3.jpg",
    "/foods/img4.jpg",
    "/foods/img5.jpg",
    "/foods/img6.jpg",
    "/foods/img7.jpg",
    "/foods/img8.jpg",
    "/foods/img9.jpg",
  ];

  return (
    <div className="mt-5">
      <h3
        className="text-blue-500 text-center text-2xl font-bold tracking-wider"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Gallery
      </h3>
      <div className="mt-5 grid grid-cols-2 gap-4 md:grid-cols-3 max-w-7xlmx-auto">
        {images.map((image, index) => (
          <div
            key={index}
            className="aspect-square overflow-hidden rounded-xl"
          >
            <img
              src={image}
              alt={`gallery-${index}`}
              className="w-full h-full object-cover hover:scale-105 transition"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

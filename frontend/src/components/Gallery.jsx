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
    <div className="mt-28 max-w-7xl mx-auto px-4">
      <h3
        className="text-amber-600 text-center text-4xl font-bold tracking-wider mb-2"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Gallery
      </h3>
      <div className="w-24 h-1 bg-amber-500 mx-auto rounded mb-12"></div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 max-w-7xl mx-auto">
        {images.map((image, index) => (
          <div
            key={index}
            className="aspect-square overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={image}
              alt={`gallery-${index}`}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 ease-in-out cursor-pointer"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

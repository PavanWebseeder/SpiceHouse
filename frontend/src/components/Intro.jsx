const Intro = () => {

    return (
        <div className="flex flex-col mt-28 px-4 max-w-4xl mx-auto items-center">
            <h2 className="text-center text-4xl md:text-5xl font-bold text-amber-600 mb-2"
                style={{ fontFamily: 'var(--font-heading)' }}>Welcome to Spice House</h2>
            <div className="w-24 h-1 bg-amber-500 rounded my-4"></div>
            <span className="text-center text-xl text-gray-500 tracking-widest uppercase mb-6"
                style={{ fontFamily: 'var(--font-heading)' }}>Taste of the Town</span>
            <p className="text-center text-base md:text-xl text-gray-600 leading-relaxed font-light"
                style={{ fontFamily: 'var(--font-body)' }}>At Spice House, we believe great food starts with quality ingredients and authentic recipes. Our chefs carefully craft every dish to deliver rich aroma, balanced spices, and unforgettable taste. Whether you’re dining with family or friends, we promise a warm ambiance and exceptional service. Come and enjoy a dining experience where every meal feels special.</p>
        </div>
    );
};

export default Intro;
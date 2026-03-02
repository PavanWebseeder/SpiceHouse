const Intro = () => {

    return(
        <div className="flex flex-col mt-20">
            <h2 className="text-center text-3xl font-bold text-blue-500"
            style={{fontFamily:'var(--font-heading)'}}>Welcome to Spice House</h2>
            <span className=" mt-1 text-center text-gray-600"
            style={{fontFamily:'var(--font-heading)'}}>Taste of Town</span>
            <p className="mt-5 text-sm md:text-lg text-gray-500"
            style={{fontFamily:'var(--font-body'}}>At Spice House, we believe great food starts with quality ingredients and authentic recipes. Our chefs carefully craft every dish to deliver rich aroma, balanced spices, and unforgettable taste.Whether you’re dining with family or friends, we promise a warm ambiance and exceptional service.Come and enjoy a dining experience where every meal feels special.</p>
        </div>
    );
};

export default Intro;
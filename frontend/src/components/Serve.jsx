const Serve = () => {

    const items = [
        {image:'/starter.jpg',
        title:'Starters',
        description:'Relish our wide range of lip smacking starters. '
        },
        {image:'/main course.jpg',
        title:'Main Course',
        description:'Tantalise your taste buds with our wide variety of main course.'
        },
        {image:'dessert.jpg',
        title:'Desserts',
        description:'Satiate your palate and take yourself on a culinary treat.'
        },
        {image:'drinks.jpg',
        title:'Drinks',
        description:'Try the most authentic and refreshing drink at our restaurant.'
        }
    ];

    return(
        <div className="mt-7">
            <h2 className="text-center text-2xl text-blue-500 tracking-wide font-bold"
            style={{fontFamily:'var(--font-heading)'}}>We Serve</h2>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
               {items.map((item)=>(
                <div className="flex flex-col w-auto p-3 rounded-lg">
                    <img src={item.image} className="aspect-square rounded-lg hover:border-2 hover:border-blue-500"></img>
                    <h3 className="text-center text-xl mt-2 font-semibold text-blue-500 tracking-wider"
                    style={{fontFamily:'var(--font-heading)'}}>{item.title}</h3>
                    <p className="text-center text-gray-500 mt-2"
                    style={{fontFamily:'var(--font-body)'}}>{item.description}</p>
                </div>
               ))}
            </div>
        </div>
    );
};

export default Serve;
import { menu } from '../data/menudata';
import { useEffect, useState  } from 'react';


const TodaySpecial =  () => {

    const [special,setSpecial] = useState(null);

    useEffect(()=>{
        const randomDish = menu[Math.floor(Math.random()* menu.length)];
        setSpecial(randomDish);
    },[]);

    if (!special) return null;

    return(
        <div className='bg-amber-50 py-16 mt-20'>
            <div className='max-w-7xl mx-auto px-4 text-center'>
                <h2 className='text-3xl font-bold text-amber-600 mb-10'>Today's Special</h2>
                
                <div className='max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6'>
                    
                    <img src='/foods/img4.jpg'
                    alt={special.name}
                    className='w-full h-80 object-cover rounded'
                    />
                    <h3 className='text-xl font-bold mt-4'>
                        {special.name}
                    </h3>
                    <p className='text-gray-400 mt-2'>
                        {special.description}
                    </p>

                
                </div>
            </div>
        </div>
    );
};

export default TodaySpecial;
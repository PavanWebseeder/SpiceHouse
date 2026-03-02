import { FaMotorcycle, FaShoppingBag, FaUtensils,FaWifi } from "react-icons/fa";

const Amenities = () => {
    const amenities = [
        {title:'Home Delivery',icon:<FaMotorcycle/>},
        {title:'Take Away',icon:<FaShoppingBag/>},
        {title:'Dine In',icon:<FaUtensils/>},
        {title:'Free Wi Fi',icon:<FaWifi/>}
    ]

    return(
        <div className="mt-5">
            
            <h3 className="text-center text-2xl font-bold text-blue-500 tracking-wider"
            style={{fontFamily:'var(--font-heading)'}}>Amenities</h3>
            
            <div className="mt-6 py-10 grid gap-3 grid-cols-2 lg:grid-cols-4 place-items-center">
              
              {amenities.map((a,index)=>(
                <div key={index} className="flex flex-col items-center">
                    
                    <div className="bg-blue-500 text-white rounded-lg  flex items-center  justify-center w-20 h-20 text-2xl">{a.icon}</div>
                    
                    <span className="mt-2 text-gray-600 text-center w-28 leading-tight"
                    style={{fontFamily:'var(--font-body)'}}>{a.title}</span>
                </div>
              ))}
            </div>
        </div>
    );
};

export default Amenities;
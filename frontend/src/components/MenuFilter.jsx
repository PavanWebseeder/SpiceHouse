import { useDispatch,useSelector } from "react-redux";
import { setCategory } from "@/features/MenuSlice";

const categories = ['All','Main Course','Starter','Dessert','Drink'];

const MenuFilter = () => {

    const dispatch = useDispatch();
    const selectedCategory = useSelector((state)=>state.menu.category);

    return(
        <div className="flex justify-center gap-4 mt-10">
            {categories.map((cat,index)=>(
                <button key={index}
                onClick={()=>dispatch(setCategory(cat))}
                className={`px-4 py-2 border rounded transition ${selectedCategory === cat ? 'bg-amber-600 text-white':'border-gray-300 hover:bg-amber-500 hover:text-white'}`}>
                    {cat}
                </button>
            ))}
        </div>
    );
};

export default MenuFilter;
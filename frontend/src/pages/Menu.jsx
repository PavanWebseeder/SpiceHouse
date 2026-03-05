import Navbar from "../components/Navbar";
import MenuHero from "@/components/MenuHero";
import MenuData from "../components/MenuData";
import MenuFilter from "@/components/MenuFilter";
import Footer from "../components/Footer";

const Menu = () => {
    return(
        <div>
            <Navbar/>
            <MenuHero/>
            <MenuFilter/>
            <MenuData/>
            <Footer/>
        </div>
    );
};

export default Menu;
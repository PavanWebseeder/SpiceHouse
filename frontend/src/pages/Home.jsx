import Navbar from "../components/Navbar"
import Hero from '../components/Hero';
import Intro from "../components/Intro";
import Serve from "../components/Serve";
import Amenities from "../components/Amenities";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import TodaySpecial from "../components/TodaySpecial";
import Testimonials from "../components/Testimonials";
const Home = () => {
    return(
        <div>
            <Navbar/>
            <Hero/>
            <Intro/>
            <Serve/>
            <TodaySpecial/>
            <Amenities/>
            <Gallery/>
            <Testimonials/>
            <Footer/>
        </div>
    );
};

export default Home;
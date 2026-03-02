import Navbar from "../components/Navbar"
import Hero from '../components/Hero';
import Intro from "../components/intro";
import Serve from "../components/Serve";
import Amenities from "../components/Amenities";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
const Home = () => {
    return(
        <div>
            <Navbar/>
            <Hero/>
            <Intro/>
            <Serve/>
            <Amenities/>
            <Gallery/>
            <Testimonials/>
            <Footer/>
        </div>
    );
};

export default Home;
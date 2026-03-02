import Navbar from '../components/Navbar';
import AboutHero from '../components/AboutHero';
import AboutContent from '../components/AboutContent';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';

const About = () => {
    return(
        <div>
            <Navbar/>
            <AboutHero/>
            <AboutContent/>
            <Testimonials/>
            <Footer/>
        </div>
    );
};

export default About;
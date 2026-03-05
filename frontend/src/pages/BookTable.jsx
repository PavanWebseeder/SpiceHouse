import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BookHero from '../components/BookHero';
import BookForm from '../components/BookForm';

const BookTable = () => {
    return(
        <div>
            <Navbar/>
            <BookHero/>
            <BookForm/>
            <Footer/>
        </div>
    );
};

export default BookTable;
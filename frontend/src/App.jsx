import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import About from './pages/About';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';
import BookTable from './pages/BookTable';
import Menu from './pages/Menu';
function App() {

  return (
    <div className='bg-orange-50/30 w-full min-h-screen font-body selection:bg-amber-500 selection:text-white'>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/book' element={<BookTable />} />
          <Route path='/menu' element={<Menu />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

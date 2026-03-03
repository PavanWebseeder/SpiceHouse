import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from "./pages/Home"
import About from './pages/About';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';
function App() {
  
  return (
    <div className='bg-orange-50/30 overflow-x-hidden min-h-screen font-body selection:bg-amber-500 selection:text-white'>
    <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about'element={<About/>}/>
        <Route path='/contact'element={<Contact/>}/>
      </Routes> 
    </BrowserRouter>
    </div>
  )
}

export default App

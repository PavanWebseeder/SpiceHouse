import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from "./pages/Home"
import About from './pages/About';
import Contact from './pages/Contact';
function App() {
  
  return (
    <div className='pt-3 mx-3 bg-white/50 overflow-hidden'>
    <BrowserRouter>
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

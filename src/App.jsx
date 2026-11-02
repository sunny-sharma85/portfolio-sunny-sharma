import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Projects from "./pages/Projects"
const App = () => {
  return (<>
  
  <BrowserRouter>
  <Navbar/>
  <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/contact" element={<Contact/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/projects" element={<Projects/>}/>

  </Routes>
  <Footer/>
  </BrowserRouter>
  </>
   
  )
}

export default App

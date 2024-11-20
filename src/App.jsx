import React from 'react'
import Home from "./pages/home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './pages/about/about';
import Contact from './pages/Contact/index';
import Projects from './pages/Projects';



const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/projects' element={<Projects/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
import "./App.css"
import './CSS/hero.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/nav";
import Hero from "./Component/hero";

export default function App() {
  return (
       <BrowserRouter>
           <Navbar/>
          
      <Routes>    
          <Route exact path="/"  element={<Hero/>} />
          {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  )
}
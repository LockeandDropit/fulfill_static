import { useState } from 'react'
import './App.css'
import { Route, Routes} from "react-router-dom"
import Landing from './pages/Landing'
import About from './pages/About'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Delete from './pages/Delete'

function App() {


  return (
    <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="/about" element={<About />}/>
    <Route path="/contact" element={<Contact />}/>
    <Route path="/privacy" element={<Privacy />}/>
    <Route path="/delete" element={<Delete />}/>
   </Routes>
  )
}

export default App

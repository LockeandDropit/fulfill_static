import React from 'react'

import { Link, Route, Routes} from "react-router-dom"


function Landing() {
  return (
    <>
    <div>
      
    </div>
    <h1>Fulfill</h1>
    <p>Find work with the click of a button</p>
    <div className="card">
      <button >
      <Link to="about">About</Link>  
      </button>
      <button >
      <Link to="contact">Contact</Link>  
      </button>
      <button >
      <Link to="delete">Delete Account</Link>  
      </button>
      <button >
      <Link to="privacy">Privacy Policy</Link>  
      </button>
     
    </div>
    
   
  </>
  )
}

export default Landing
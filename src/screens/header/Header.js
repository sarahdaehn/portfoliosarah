import React from 'react'
import { ReactTyped } from 'react-typed'


function Header() {
  return (
    <div>

    <h1>What am I ? </h1>
    <ReactTyped
      strings={[
        " ",
        "A Software Engineer",
        "Also known as an",
        "Front-end developer",
        "Back-end developer",
        "Full stack developer",
        "Or!",
        " ", 
        "'a coder'",
        " ",
        " "]}
      typeSpeed={40}
      backSpeed={50}
      
      loop
    />
      
    
        
    </div>
  )
}

export default Header

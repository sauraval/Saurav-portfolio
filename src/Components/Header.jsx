import React, { useEffect, useState } from 'react'
import './Header.css'
import toggle_light from '../assets/night.png'
import toggle_dark from '../assets/day.png'



function Header({ theme, setTheme }) {
  const toggle_mode = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light')
  }
 
  const [menuOpen,setMenuOpen] =  useState(false)

 
  return (
    <nav className='w-auto '>
      <div className='row'>
       <div>
          <section >
            <header className='header center light m-3 d-flex justify-content-between'>
              <h3>
                <a href="home" className='text-decoration-none fw-bold '>Saurav AL</a>
              </h3>
              <nav className='nav' >
                <div className="menu" onClick={()=>{
                  setMenuOpen(!menuOpen)
                }}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
  
                </div>
                <ul id='navlist'  className={menuOpen ? "open" : ""}>
                  <li>
                    <a class='list' href="#home" style={{ paddingRight: '20px' }}>Home</a>
                  </li>
                  <li>
                    <a class='list' style={{ paddingRight: '20px' }} href="#about">About</a>
                  </li>
                  <li>
                    <a class='list' style={{ paddingRight: '20px' }} href="#skill">Skill</a>
                  </li>
                  <li>
                    <a class='list' style={{ paddingRight: '20px' }} href="#project">Project</a>
                  </li>
                  <li>
                    <a class='list' style={{ paddingRight: '20px' }} href="#get">Contact</a>
                  </li>
                  <li>
                    <img onClick={() => { toggle_mode() }} src={theme == 'light' ? toggle_light : toggle_dark} alt="" className='toggle_icon' />
                  </li>
               </ul>
                
              </nav>
            </header>
    
    
          </section>
       </div>
      </div>
    </nav>
  )
}

export default Header
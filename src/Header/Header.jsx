import React from 'react'
import './Header.css'
import '../Custom.css'
const Header = () => {
  return (
  <>  <header>
        <div className="container">
            <div id="logo">Assignment tracker</div>
        </div>
    

    <nav className="vertical-nav">
        <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>

          <li><a href="#">Login</a></li>
            </ul>
    </nav>
    </header>  
    </>

  )
}

export default Header

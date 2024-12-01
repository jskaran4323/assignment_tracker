import React from 'react'
import "./Footer.css"
import "../Custom.css"
const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <p id='copyright'>&copy; Assignment Tracker and Co</p>
        </div>
        <div className='vertical-foot'>
        <ul className='footer-content'>
          <li><a href="">About</a></li>
          <li><a href="">Contact us</a></li>
        </ul>

        </div>
        
     </footer>
  )
}

export default Footer

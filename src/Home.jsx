import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import './Home.css'
const Home = () => {
  return (
    <>
      <Header />
      <div className='container-home'>
        <h1>Welcome to Assignment Tracker</h1>
      </div>
      <div className='btn-container'>
        <button id='signup-btn'>Signup</button>  
      </div>
      <Footer />
    </>
  )
}

export default Home

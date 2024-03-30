import React from 'react'
import TopNav from './TopNav'
import './SideNav.css'

function SideNav() {
  return (

    <>
    <TopNav/>
    <div>
    <div className="sidebar"> 
        <ul className="navbar-nav"> 
          <li className="nav-item">
            <a href="/" className="nav-link"> 
              Product List
            </a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link"> 
              Product Details
            </a>
          </li>
          <li className="nav-item">
            <a href="/services" className="nav-link"> 
              Services
            </a>
          </li>
          <li className="nav-item">
            <a href="/contact" className="nav-link"> 
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="main-content">
        
      </div>
    </div>
    </>
  )
}

export default SideNav

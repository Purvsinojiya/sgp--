import React from 'react'
import "./nav.css"

const nav = () => {
  return (
    <nave className='main-nav'>
      <div className="logo">
          <h2>
            <span>S</span>hivam
            <span>E</span>nterprice
            
          </h2>
        </div>
    
    <div className='menu-link'>
<ul>
    <li><a href="https://www.w3schools.com/js/">home</a></li>
    <li><a href="https://www.w3schools.com/js/">about</a></li>
    <li><a href="https://www.w3schools.com/js/">contect</a></li>
    <li><a href="https://www.w3schools.com/js/">service</a></li>
</ul>
    </div>
    <div className='searchbar'>
        <input type="search" placeholder="search the product"></input>
    </div>
    </nave>
  )
}

export default nav

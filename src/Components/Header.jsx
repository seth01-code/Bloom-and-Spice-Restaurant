import React from 'react'
import './Header.css'
import Logo from '../assets/IMG-20240307-WA0012.jpg'
import { Link } from 'react-router-dom'
import {AiOutlineShoppingCart} from 'react-icons/ai'


function Header() {
  return (
    <div className='Header-container'>
      <div className="Nav-bar">
        <img src={Logo} alt="logo" />
        <ul className="nav-list">
            <li><Link to="/">Home</Link></li>
            <li><a href="#about">About us</a></li>
            <li><Link to='/menu'>Menu</Link></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">Contact us</a></li>
            <div className="header__optionBasket">
              <AiOutlineShoppingCart/>
              <span className="header__optionLineTwo header__basketCount">0</span>
            </div>
            <button className='sign-up'>Sign Up</button>
        </ul>
      </div>
    </div>
  )
}

export default Header

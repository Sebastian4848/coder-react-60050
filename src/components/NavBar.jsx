import React from 'react'
import '../styles/NavBar.css'
import CartWidget from './CartWidget'


const NavBar = () => {
    return (
        <ul>
            <div>
                <li><a className="active" href="#home">Home</a></li>
                <li><a href="#news">News</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#about">About</a></li>
            </div>

            <div>
                <h1>Tienda WauDogShop</h1>
            </div>
            
            <div>
                <CartWidget />
            </div>
        </ul>
    )
}

export default NavBar


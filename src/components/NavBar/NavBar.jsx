import React from 'react'
import styles from '../NavBar/navbar.module.scss'
import CartWidget from '../CartWidget/CartWidget'


const NavBar = () => {
    return (
        <ul>
            <div>
                <li><a className={styles.active} href="#home"></a></li>
                <li><a href="#dogs">Dogs</a></li>
                <li><a href="#cats">Cats</a></li>
                <li><a href="#complementos">Complementos</a></li>
                <li><a href="#ofertas">Ofertas</a></li>
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


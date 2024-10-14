import React from 'react'
import styles from './navbar.module.scss'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'


const NavBar = () => {
    return (
        <ul>
            <div>
                <li>
                    <NavLink className={({ isActive }) => { return isActive ? styles.isActive : styles.notActive }} to={"/"}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => { return isActive ? styles.isActive : styles.notActive }} to={"/category/jewelery"}>
                        Jewelery
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => { return isActive ? styles.isActive : styles.notActive }} to={"/category/electronics"}>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => { return isActive ? styles.isActive : styles.notActive }} to={"/category/men clothing"}>
                        Men clothing
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => { return isActive ? styles.isActive : styles.notActive }} to={"/category/women clothing"}>
                        Women clothing
                    </NavLink>
                </li>
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


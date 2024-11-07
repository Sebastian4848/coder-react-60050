import React from 'react'
import styles from './navbar.module.scss'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
import Switch from '../Switch/Switch'
import { useContext, useState } from 'react'
import { Theme } from '../../context/ThemeProvider'
import logo from '../../assets/logo-new-waudogshop.webp'


const NavBar = () => {

    const { dark, setDark } = useContext(Theme)

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: 200 }}>
                </div>
                <div >
                    <NavLink style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} to={"/"}>
                        <img src={logo} alt="logo" />
                    </NavLink>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: 200 }}>
                    <Switch checked={dark} setChecked={setDark} />
                    <CartWidget/>
                </div>
            </div>
            <ul>
                <li>
                    <NavLink className={({ isActive }) => { return isActive ? styles.isActive : styles.notActive }} to={"/category/arnes"}>
                        Arneses
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => { return isActive ? styles.isActive : styles.notActive }} to={"/category/collar"}>
                        Collares
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => { return isActive ? styles.isActive : styles.notActive }} to={"/category/corbatin"}>
                        Corbatines
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => { return isActive ? styles.isActive : styles.notActive }} to={"/category/correa"}>
                        Correas
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => { return isActive ? styles.isActive : styles.notActive }} to={"/category/bandana"}>
                        Bandanas
                    </NavLink>
                </li>
            </ul>
        </>
    )
}

export default NavBar


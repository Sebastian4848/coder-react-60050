import React from "react"
import NavBar from "../NavBar/NavBar"
import Footer from "../Footer/Footer"
import styles from './layout.module.scss'

const Layout = ({ children }) => {
    return (
        <>
            <NavBar/>
            <div className = {styles['main-container']}>
                {children}
            </div>
            <Footer/>
        </>
    )
}

export default Layout

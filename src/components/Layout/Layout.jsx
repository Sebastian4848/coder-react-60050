import React from "react"
import NavBar from "../NavBar/NavBar"
import Footer from "../Footer/Footer"
import styles from './layout.module.scss'
import { useContext } from "react"
import { Theme } from "../../context/ThemeProvider"

const Layout = ({ children }) => {

        // Light o Dark
        // const { dark } = useContext(Theme)

    return (
        <>
            <NavBar/>
            {/* <div className={styles[`main-container-${dark ? "dark" : "light"}`]}> */}
                        <div className={styles.light}>
                {children}
            </div>
            <Footer/>
        </>
    )
}

export default Layout

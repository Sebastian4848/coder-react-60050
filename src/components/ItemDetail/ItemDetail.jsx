import React, { useState, useContext } from "react"
import styles from './itemdetail.module.scss'
import ItemCount from '../ItemCount/ItemCount'
import { Cart } from '../../context/CartProvider'
import { NavLink } from "react-router-dom"


const ItemDetail = ({ product }) => {
    //? Añadido
    const { addCart } = useContext(Cart)
    const [itemCountVisibility, setItemCountVisibility] = useState(true)

    const handleCart = (quantity) => {
        setItemCountVisibility(false)
        //? Añadido
        addCart(product, quantity)
    }

    return (
        <div className={styles.container}>
            <img src={product.pictureUrl} className={styles.image} />
            <div className={styles.subcontainer}>
                <h1>{product.title}</h1>
                <p className={styles.text}>{product.description}</p>
                <span style={{ fontSize: 30 }}>${product.price}</span>
                {itemCountVisibility ? (<ItemCount initial={1} stock={10} addCart={handleCart} />) : (
                    <>
                        <NavLink to="/cart">
                            <button className={styles.button}>Ir al Carrito de Compras</button>
                        </NavLink>
                        <NavLink to="/">
                            <button className={styles.button}>
                                Ir a Home
                            </button>
                        </NavLink>
                    </>


                )}
            </div>
        </div>
    )
}

export default ItemDetail

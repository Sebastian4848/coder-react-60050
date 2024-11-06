import React from 'react'
import styles from './CartItem.module.scss'

const CartItem = ({ item }) => {
    return (
        <div className={styles.cartItem} >
            <img src={item.pictureUrl} />
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <p style={{ fontSize: 20, fontWeight: 'bold' }}>Precio: {item.price}</p>
            <p style={{ fontSize: 20, fontWeight: 'bold' }}>Cantidad: {item.quantity}</p>
            <button className={styles.button}>Eliminar</button>
        </div>
    )
}


export default CartItem
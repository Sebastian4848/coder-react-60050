import React, { useContext } from 'react';
import styles from './CartItem.module.scss'
import { Cart as CartContext } from '../../context/CartProvider';



const CartItem = ({ item }) => {
    const { removeFromCart } = useContext(CartContext); // Destructure removeFromCart from context
    return (
        <div className={styles.cartItem} >
            <img src={item.pictureUrl} />
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <p style={{ fontSize: 20, fontWeight: 'bold' }}>Precio: {item.price}</p>
            <p style={{ fontSize: 20, fontWeight: 'bold' }}>Cantidad: {item.quantity}</p>
            <button className={styles.button} onClick={() => removeFromCart(item.id)}>Eliminar</button>
        </div>
    )
}


export default CartItem
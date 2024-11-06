import React, { useContext } from 'react'
import CartProvider, { Cart as CartContext } from '../../context/CartProvider'
import CartItem from '../CartItem/CartItem'
import styles from './Cart.module.scss'
import { NavLink } from 'react-router-dom'
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from '../../firebase/config'
import endPurchase from '../../services/endPurchase'

const Cart = () => {
    const { cart, clearCart } = useContext(CartContext)
    const price = cart.reduce((acc, item) => acc + item.price, 0)
    console.log({ cart });
    console.log("Cart items:", cart);  // Check if cart data is as expected

    // const handlePurchase = () => {
    //     const order = {
    //         buyer: {
    //             name: "Sebastian",
    //             lastname: "Ojeda",
    //             email: "sebastian.ojeda"
    //         },
    //         producs: cart,
    //         total: 1245, //? Reemplazar por un metodo correspondiente (reduce, useMemo)
    //         // total: cart.reduce((acc, item) => acc + item.price, 0),
    //         timestamp: serverTimestamp()
    //     }

    //         ; (async () => {
    //             try {
    //                 // Add a new document with a generated id.
    //                 const docRef = await addDoc(collection(db, "orders"), order);
    //                 console.log("Document written with ID: ", docRef.id);
    //             } catch (error) {
    //                 console.error("Error adding document: ", error);
    //             }
    //         })()
    // }


    return (<div className={styles.main}>
        {cart.length ? (
            <div className={styles.container}>
                <div >
                    {cart.map(cartitem => { return <CartItem item={cartitem} key={cartitem.id} /> })}
                </div>
                <p style={{ fontSize: 40 }}>Total Compra: {price}</p>
                <button onClick={() => endPurchase(cart)} className={styles.button}>Terminar compra</button>
                <button onClick={clearCart} className={styles.button}>Vaciar Cart</button>
            </div>

        ) : (
            <div className={styles.main}>
                <h1>No hay productos en el cart</h1>
                <NavLink to="/" >
                    <button className={styles.button}>
                        Ir a Home
                    </button>
                </NavLink>
            </div>
        )}
    </div>
    )
}

export default Cart
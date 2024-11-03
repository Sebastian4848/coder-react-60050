import React, { useContext } from 'react'
import { Cart as CartContext } from '../../context/CartProvider'
import CartItem from '../CartItem/CartItem'
import styles from './Cart.module.scss'
import { NavLink } from 'react-router-dom'
import { collection, addDoc , serverTimestamp} from "firebase/firestore";
import { db } from '../../firebase/config'

const Cart = () => {
    const { cart } = useContext(CartContext)
    console.log({ cart });
    console.log("Cart items:", cart);  // Check if cart data is as expected

    const handlePurchase = () => {
        const order = {
            buyer: {
                name: "Sebastian",
                lastname: "Ojeda",
                email: "sebastian.ojeda"
            },
            producs: cart,
            total: 1245, //? Reemplazar por un metodo correspondiente (reduce, useMemo)
            // total: cart.reduce((acc, item) => acc + item.price, 0),
            timestamp: serverTimestamp()
        }

            ;(async () => {
                try {
                    // Add a new document with a generated id.
                    const docRef = await addDoc(collection(db, "orders"), order);
                    console.log("Document written with ID: ", docRef.id);
                } catch (error) {
                    console.error("Error adding document: ", error);
                }
            })()
    }


    return (<div className={styles.container}>
        {cart.length ? (
            <>
                {cart.map(cartitem => {
                    return <CartItem item={cartitem} key={cartitem.id} />
                })}
                <button onClick={handlePurchase}>End purchase</button>
            </>
        ) : (
            <>
                <h1>No hay productos en el cart</h1>
                <NavLink to="/">Home</NavLink>
            </>
        )}
    </div>
    )
}

export default Cart
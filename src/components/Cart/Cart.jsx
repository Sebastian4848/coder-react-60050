import React, { useContext } from 'react'
import CartProvider, { Cart as CartContext } from '../../context/CartProvider'
import CartItem from '../CartItem/CartItem'
import styles from './Cart.module.scss'
import { NavLink } from 'react-router-dom'


const Cart = () => {
    const { cart, clearCart } = useContext(CartContext)
    const price = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)


    return (<div className={styles.main}>
        {cart.length ? (
            <div className={styles.container}>
                <div >
                    {cart.map(cartitem => { return <CartItem item={cartitem} key={cartitem.id} /> })}
                </div>
                <p style={{ fontSize: 40 }}>Total Compra: {price}</p>
                {/* <button onClick={() => endPurchase(cart)} className={styles.button}>Terminar Compra</button> */}
                <NavLink to={"/checkout"}>
                    <button className={styles.button}>Terminar Compra</button>
                </NavLink>
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
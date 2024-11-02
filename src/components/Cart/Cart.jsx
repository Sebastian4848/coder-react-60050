import React, { useContext } from 'react'
import { Cart as CartContext } from '../../context/CartProvider'
import CartItem from '../CartItem/CartItem'
import styles from './Cart.module.scss'
import { NavLink } from 'react-router-dom'

const Cart = () => {
    const { cart } = useContext(CartContext)
    console.log({ cart });
    return <div className={styles.container}>




        {
            cart.length ?
                cart.map(cartitem => {
                    return <CartItem item={cartitem} key={cartitem.id} />
                })
                :
                <>
                    <h1>No hay productos en el cart</h1>
                    <NavLink to="/"><button>Home</button></NavLink>
                </>
        }
    </div>
}

export default Cart
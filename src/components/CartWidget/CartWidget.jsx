import React from 'react'
import cart from '../../assets/cart.svg'
import { useContext } from 'react';
import { Cart } from '../../context/CartProvider'
import { NavLink } from 'react-router-dom';
import styles from './CartWidget.module.scss'

const CartWidget = () => {
    const { quantity } = useContext(Cart);
    return (
        <>
            <NavLink to={'/cart'} className={styles.container}>
                <span className={styles.text} >({quantity})</span>
                <img src={cart} alt='cart' style={{ width: 50 }} />
            </NavLink>
        </>
    )
}
// style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: 70, padding: '10px' }}
export default CartWidget
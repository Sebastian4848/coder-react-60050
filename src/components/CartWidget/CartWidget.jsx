import React from 'react'
import cart from '../../assets/cart.svg'
import { useContext } from'react';
import { Cart } from '../../context/CartProvider'

const CartWidget = () => {
    const { quantity } = useContext(Cart);
    return (
        <>
        <div>
        <img src={cart} alt='cart' style={{ width: 40 }} />
        <p style={{ fontWeight: 'bold', color: 'white', textDecoration: 'none' }}>{quantity}</p>
        </div>
        </>
    )
}

export default CartWidget
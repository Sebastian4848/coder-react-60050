import React, { useState, useContext } from "react"
import styles from './itemdetail.module.scss'
import ItemCount from '../ItemCount/ItemCount'
import { Cart } from '../../Context/CartProvider'


const ItemDetail = ({ product }) => {
    //? Añadido
    const {addCart} = useContext(Cart)
    const [itemCountVisibility, setItemCountVisibility] = useState(true)
    console.log(product)

    const handleCart = (quantity) => {
        console.log(quantity);
        setItemCountVisibility(false)
        //? Añadido
        addCart(product, quantity)
    }

    return (
        <div className={styles.container}>
            <img src={product.pictureUrl} style={{width: 300}}/>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <span>${product.price}</span>
            {/* Item Count */}
            {itemCountVisibility ? (<ItemCount initial={1} stock={5} addCart={handleCart}/>):(<button>Go Cart</button>)}
        </div>
    )
}

{/* <ItemCount initial={1} stock={5} onAdd={(quantity) => console.log("ItemCount", quantity)} /> */}

export default ItemDetail

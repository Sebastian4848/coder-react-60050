import React, { useEffect, useState } from "react"
import styles from "./itemcount.module.scss"

const ItemCount = ({stock, initial,onAdd}) => {

    const [quantity, setQuantity] = useState(initial)

    // const stockDisponible = 5;
    // useEffect(() => {
    //     console.log("Esto se ejecutara solamente cuando se monta el componente")
    // }, [])


    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }

    }
    return (
        <div className={styles.container}>
            <div className={styles.counter}>
                <button className={styles.button_small} onClick={decrement}>-</button>
                <span>{quantity}</span>
                <button className={styles.button_small} onClick={increment}>+</button>
            </div>
            <button className={styles.button} onClick={() => onAdd(quantity)} disabled={!stock}>
                Agregar al Carrito
            </button>
        </div>
    )
}

export default ItemCount
import React, { useEffect, useState } from "react"
import "./ItemCount.css"

const ItemCount = () => {

    const [count, setCount] = useState(0)
    const stockDisponible = 5;

    useEffect(() => {
        console.log("Esto se ejecutara solamente cuando se monta el componente")
    }, [])


    const onAdd = () => {
        if (count < stockDisponible) {
            setCount(prevCount => prevCount + 1)
            console.log(count)
        } else {
            // alert("No hay stock disponible")
        }
    }

    const onSubstract = () => {
        if (count > 1) {
            setCount(prevCount => prevCount - 1)
            console.log(count)
        } else {
            // alert("No hay stock disponible")
        }

    }
    return (
        <div className="container">
            <div className="counter">
                <button className="button_small" onClick={onAdd}>+</button>
                <span>{count}</span>
                <button className="button_small" onClick={onSubstract}>-</button>
            </div>
            <button className="button">
                Agregar al Carrito
            </button>
        </div>
    )
}

export default ItemCount
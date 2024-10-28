import React, { useEffect, useState } from 'react'
import products from '../../assets/mockData.json'
import Item from '../Item/Item'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from "react-router-dom"
import ItemCount from '../ItemCount/ItemCount'
import styles from './itemdetailcontainer.module.scss'


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const { itemId } = useParams()

    useEffect(() => {

        const promise2 = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products)
            }, 2000)
        })

        promise2.then((products) => {
            const product = products.find(productToFind => productToFind.id === Number(itemId))
            setProduct(product)

        }).catch((error) => {
            console.log(error)
        })


    }, [itemId])

    return (product &&
        <div className={styles.container}>
            <ItemDetail product={product} />
            {/* <ItemCount initial={1} stock={5} onAdd={(quantity) => console.log("ItemCount", quantity)} /> */}
        </div>
    )
}

export default ItemDetailContainer
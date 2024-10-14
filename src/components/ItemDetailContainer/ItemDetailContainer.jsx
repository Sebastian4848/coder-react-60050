import React, { useEffect, useState } from 'react'
import products from '../../assets/mockData.json'
import Item from '../Item/Item'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const { id } = useParams()

    useEffect(() => {

        const promise2 = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products)
            }, 2000)
        })

        promise2.then((products) => {
            const product = products.find(productToFind => productToFind.id === Number(id))
            setProduct(product)

        }).catch((error) => {
            console.log(error)
        })


    }, [id])

    return (product && <ItemDetail product={product} />)
}

export default ItemDetailContainer
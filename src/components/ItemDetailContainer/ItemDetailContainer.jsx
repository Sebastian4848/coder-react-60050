import React, { useEffect, useState } from 'react'
import products from '../../assets/mockData.json'
import Item from '../Item/Item'
import ItemDetail from '../ItemDetail/ItemDetail'


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    useEffect(() => {
        setProduct(products[0])
    }, [])

    return <ItemDetail product={product} />
}

export default ItemDetailContainer
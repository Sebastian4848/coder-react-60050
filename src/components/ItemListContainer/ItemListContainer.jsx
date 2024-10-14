import React, { useEffect, useState } from "react"
import products from '../../assets/mockData.json'
import mockProducts from "../../assets/mockData.json"
import ItemList from '../ItemList/ItemList'
import { useParams } from "react-router-dom"

//? Tiene la logica para traer los productos. Promise, Set Timeout. (componente contenedor)

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([])

  const {categoryId} = useParams()

  useEffect(() => {
    let productsFiltered
    if (categoryId) {
        productsFiltered =mockProducts.filter(f=>f.category===categoryId)            
    }else{
        productsFiltered = mockProducts
    }
    setProducts(productsFiltered)
    
}, [categoryId])

  //! Falta generar la promise con el retraso de 2 segundos

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{greeting}</h1>
      <ItemList products={products} />
    </div>

  )
}

export default ItemListContainer
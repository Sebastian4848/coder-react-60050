import React, { useEffect, useState } from "react"
import products from '../../assets/mockData.json'
import mockProducts from "../../assets/mockData.json"
import ItemList from '../ItemList/ItemList'
import { useParams } from "react-router-dom"
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"

//? Tiene la logica para traer los productos. Promise, Set Timeout. (componente contenedor)

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const { categoryId } = useParams()

  useEffect(() => {

    const promise1 = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(mockProducts)
      }, 100)
    })

    promise1.then((products) => {

      let productsFiltered
      if (categoryId) {
        productsFiltered = mockProducts.filter(f => f.category === categoryId)
      } else {
        productsFiltered = mockProducts
      }
      setProducts(productsFiltered)

    }).catch((error) => {
      console.log(error)
    })


  }, [categoryId])

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{greeting}</h1>
      <ItemList products={products} />
      <ItemDetailContainer />
    </div>

  )
}
export default ItemListContainer
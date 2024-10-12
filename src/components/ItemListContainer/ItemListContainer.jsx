import React from 'react'
import products from '../../assets/mockData.json'
import ItemList from '../ItemList/ItemList'

// Logica para traer los productos. Promise, setTimeout etc.
const ItemListContainer = () => {


// console.log(products)
  return <ItemList products={products} />}

export default ItemListContainer
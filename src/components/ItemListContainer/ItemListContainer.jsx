import React, { useEffect } from 'react'
import products from '../../assets/mockData.json'
import ItemList from '../ItemList/ItemList'

//? Tiene la logica para traer los productos. Promise, Set Timeout. (componente contenedor)

const ItemListContainer = ({ greeting }) => {

//! Falta generar la promise con el retraso de 2 segundos

return (
  <div>
    <h1 style={{ textAlign: 'center' }}>{greeting}</h1>
    <ItemList products={products} />
  </div>

)
}

export default ItemListContainer
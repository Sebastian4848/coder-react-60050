import React from 'react'
import products from '../../assets/mockData.json'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({ greeting }) => {

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{greeting}</h1>
      <ItemList products={products} />
    </div>

  )
}

export default ItemListContainer
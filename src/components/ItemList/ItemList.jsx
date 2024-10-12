import React from 'react'
import Item from '../Item/Item'
import styles from '../ItemList/itemlist.module.scss'

// En este componente hacemos el mapeo de los products y devolvemos un item por cada producto
const ItemList = ({ products }) => {
  return (
    <div className={styles.container}>
      {products.map(product => {return (<Item item={product} key={product.id}/>)})}
      </div>
  )
}

export default ItemList
import React from 'react'
import styles from './item.module.scss'
import ItemCount from '../ItemCount/ItemCount'
import { NavLink } from "react-router-dom"

//? Es un componente destinado a mostrar informacion breve del productoque el user clickeara para acceder a los detalles (componente de presentacion)
/*
    {
        "id": 21,
        "title": "LG Optimus Chat C550",
        "description": "diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis",
        "price": 56.7,
        "pictureUrl": "http://dummyimage.com/300x300.png/dddddd/000000"
    }
*/
const Item = ({ item }) => {
  return (
    <div className={styles.container}>
      <img src={item.pictureUrl} />
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <span>${item.price}</span>
      {/* <ItemCount item={item}/> */}
      <NavLink to={`/detail/${item.id}`}>
        <button className={styles.button}>Detail</button>
      </NavLink>
    </div>
  )
}

export default Item
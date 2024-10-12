import React from 'react'
import styles from '../Item/item.module.scss'
import ItemCount from '../ItemCount/ItemCount'
/*
    {
        "id": 21,
        "title": "LG Optimus Chat C550",
        "description": "diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis",
        "price": 56.7,
        "pictureUrl": "http://dummyimage.com/300x300.png/dddddd/000000"
    }
*/
const Item = ({item}) => {
  return (
    <div className={styles.container}>
        <img src={item.pictureUrl}/>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <span>${item.price}</span>
        {/* <ItemCount item={item}/> */}
    </div>
  )
}

export default Item
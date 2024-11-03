import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase/config"


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const { id } = useParams()
    // const { itemId } = useParams()

    useEffect(() => {
        if (!id) return; // Ensure id is defined

        (async () => {

            try {
                // const docRef = doc(db, "products", itemId);
                const docRef = doc(db, "products", id);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    console.log("Document data:", docSnap.data());
                    // setProduct({...docSnap.data(), itemId})
                    setProduct({...docSnap.data(), id})
                } else {
                    // docSnap.data() will be undefined in this case
                    console.log("No such document!");
                }

            } catch (error) {
                console.log(error)
            }
        })()

        // const promise2 = new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //         resolve(products)
        //     }, 100)
        // })
        // promise2.then((products) => {
        //     const productFound = products.find(productToFind => productToFind.id === Number(itemId))
        //     setProduct(productFound)

        // }).catch((error) => {
        //     console.log(error)
        // })


// }, [itemId])
}, [id])

    // return (product &&
    //     <div className={styles.container}>
    //         <ItemDetail product={product} />
    //         {/* <ItemCount initial={1} stock={5} onAdd={(quantity) => console.log("ItemCount", quantity)} /> */}
    //     </div>
    // )

    return product && <ItemDetail product={product} />
}



export default ItemDetailContainer
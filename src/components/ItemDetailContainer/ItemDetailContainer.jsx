import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase/config"
import Loader from "../Loader/Loader"
import styles from "./ItemDetailContainer.module.scss"


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const { id } = useParams()
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (!id) return; // Ensure id is defined

        (async () => {
            setLoading(true);
            try {
                const docRef = doc(db, "products", id);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setProduct({ ...docSnap.data(), id })
                } else {
                    console.log("No such document!");
                }

            } catch (error) {
                console.log(error)
                setError("Failed to load products");
            } finally {
                setLoading(false); 
            }
        })()

    }, [id])


    if (loading) {
        return <Loader />; 
    }

    if (error) {
        return <p>{error}</p>;
    }

    return product && <div className={styles.container}>
        < ItemDetail product={product} />
    </div>
}

export default ItemDetailContainer
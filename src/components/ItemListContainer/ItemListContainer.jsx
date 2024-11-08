import React, { useEffect, useState } from "react"
import products from '../../assets/mockData.json'
import mockProducts from "../../assets/mockData.json"
import ItemList from '../ItemList/ItemList'
import { useParams } from "react-router-dom"
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"
import { db } from "../../firebase/config"
import { collection, query, where, getDocs } from "firebase/firestore";
import Loader from "../Loader/Loader"

//? Tiene la logica para traer los productos. Promise, Set Timeout. (componente contenedor)

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const { categoryId } = useParams()

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        let productsFiltered = []

        if (categoryId) {

          const q = query(collection(db, "products"), where("category", "==", categoryId))

          const querySnapshot = await getDocs(q);
          querySnapshot.forEach((doc) => {
            productsFiltered.push({ id: doc.id, ...doc.data() })
          });

        } else {
          const querySnapshot = await getDocs(collection(db, "products"));
          querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
            productsFiltered.push({ id: doc.id, ...doc.data() })
          })
        }

        setProducts(productsFiltered)
      } catch (error) {
        console.log(error)
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }

    })()

  }, [categoryId])

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{greeting}</h1>
      {loading ? (
        <Loader/>
      ) : error ? (
        <p style={{ textAlign: 'center', color: 'red' }}>{error}</p>
      ) : (
        <ItemList products={products} />
      )}
      <ItemDetailContainer />
    </div>
  );
};

export default ItemListContainer;
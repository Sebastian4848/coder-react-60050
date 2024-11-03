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
      setLoading(true);  // Set loading to true when starting fetch
      try {
        let productsFiltered = []

        if (categoryId) {

          const q = query(collection(db, "products"), where("category", "==", categoryId))

          const querySnapshot = await getDocs(q);
          querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
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
        setLoading(false);  // Set loading to false after fetch is done
      }

    })()




    // const promise1 = new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve(mockProducts)
    //   }, 100)
    // })

    // promise1.then((products) => {

    //   let productsFiltered
    //   if (categoryId) {
    //     productsFiltered = mockProducts.filter(f => f.category === categoryId)
    //   } else {
    //     productsFiltered = mockProducts
    //   }
    //   setProducts(productsFiltered)

    // }).catch((error) => {
    //   console.log(error)
    // })
    // setProducts(productsFiltered)

  }, [categoryId])

  //   return (
  //     <div>
  //       <h1 style={{ textAlign: 'center' }}>{greeting}</h1>
  //       <ItemList products={products} />
  //       <ItemDetailContainer />
  //     </div>

  //   )
  // }
  // export default ItemListContainer

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
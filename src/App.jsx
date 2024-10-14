import ItemCount from "./components/ItemCount/ItemCount"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/NavBar/NavBar"
import products from "./assets/mockData.json"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import Layout from "./components/Layout/Layout"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NotFound from "./components/NotFound/NotFound"

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/detail/:id" element={<ItemDetailContainer />} />
            <Route path = "*" element ={<NotFound/>}/>
        </Routes>
        {/* <NavBar /> */}
        {/* <ItemDetailContainer /> */}
        {/* <ItemListContainer greeting="Bienvenidos" /> */}
        {/* <ItemCount initial = {1} stock = {10} onAdd = {(quantity) => console.log("Cantidad agregada", quantity)}/> */}
      </Layout>
    </BrowserRouter>
  )
}

export default App

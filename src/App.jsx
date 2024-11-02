import ItemCount from "./components/ItemCount/ItemCount"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/NavBar/NavBar"
import products from "./assets/mockData.json"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import Layout from "./components/Layout/Layout"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NotFound from "./components/NotFound/NotFound"
import ThemeProvider from "./context/ThemeProvider"
import CartProvider from "./context/CartProvider"
import Cart from "./components/Cart/Cart"

function App() {
  return (
    <CartProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/category/:categoryId" element={<ItemListContainer />} />
              <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
            {/* <NavBar /> */}
            {/* <ItemDetailContainer /> */}
            {/* <ItemListContainer greeting="Bienvenidos" /> */}
            {/* <ItemCount initial = {1} stock = {10} onAdd = {(quantity) => console.log("Cantidad agregada", quantity)}/> */}
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </CartProvider>
  )
}

export default App

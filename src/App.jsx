import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import Layout from "./components/Layout/Layout"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NotFound from "./components/NotFound/NotFound"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
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
              <Route path="/detail/:id" element={<ItemDetailContainer />}/>
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </CartProvider>
  )
}

export default App

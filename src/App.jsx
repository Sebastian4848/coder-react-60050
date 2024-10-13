import ItemCount from "./components/ItemCount/ItemCount"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/NavBar/NavBar"
import products from "./assets/mockData.json"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"

function App() {
  return (
    <>
      <NavBar />
      {/* <ItemDetailContainer /> */}
      <ItemListContainer greeting="Bienvenidos" />
      {/* <ItemCount initial = {1} stock = {10} onAdd = {(quantity) => console.log("Cantidad agregada", quantity)}/> */}

    </>
  )
}

export default App

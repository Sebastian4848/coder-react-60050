import ItemCount from "./components/ItemCount/ItemCount"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/NavBar/NavBar"

function App() {
  return (
    <>
      <NavBar />
      {/* <ItemListContainer message="Hello, World!" /> */}
      <ItemCount initial = {1} stock = {10} onAdd = {(quantity) => console.log("Cantidad agregada", quantity)}/>
    </>
  )
}

export default App

import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { ItemListC } from "./components/ItemListC"
import  NotFound  from "./components/NotFound"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./css/main.css"
import Item from "./components/Item"
import { ItemDetailContainer } from "./components/ItemDetailContainer"

function App() {
  return (

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ItemListC />}/>
        <Route path="/category/:categoryId" element={<ItemListC />} />
        <Route path="/Item:id" element={<Item />}/>
        <Route path="/item/:itemId" element={<ItemDetailContainer />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ItemListC />
      <Footer />
    </BrowserRouter>
  )
}

export default App
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/Products/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyProvider from "./components/Context/CartContext";
import Cart from "./components/CartResume/CartResume";
import CartResume from "./components/CartResume/CartResume";

function App() {
  return (
    <MyProvider>
      <BrowserRouter>
        <div className="App">
          <Header />
            <Routes>
              <Route path="/" element={<ItemListContainer greeting="Elige como darle vida a tus fotos"/>}/>
              <Route path="/categoria/:cat" element={<ItemListContainer/>}/>
              <Route path="/producto/:id" element={<ItemDetailContainer/>}/>
              <Route path="/cart" element={<CartResume/>}/>
              <Route path="*" element={<h1>404: La página no existe o la cambiamos de lugar.</h1>}/>
            </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </MyProvider>
  );
}

export default App;

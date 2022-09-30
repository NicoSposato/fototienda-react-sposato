import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/Products/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {

  return (
    <div className="App">
      <Header />
      {/*<ItemListContainer greeting="Elige como darle vida a tus fotos"/>*/}
      <ItemDetailContainer />
      <Footer />
    </div>
  );
}

export default App;

import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/Products/ItemListContainer";
import Wrapper from "./components/Wrapper/Wrapper";
import ItemCount from "./components/ItemCount/ItemCount";

function App() {

  return (
    <div className="App">
      <Header />
      <ItemListContainer greeting="Elige como darle vida a tus fotos"/>
      <Wrapper>
        <ItemCount initial={1} stock={15}/>
        <br />
        <ItemCount initial={6} stock={21}/>
      </Wrapper>
      <Footer />
    </div>
  );
}

export default App;

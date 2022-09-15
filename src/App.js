import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import Footer from './components/Footer/Footer.jsx';
import ItemListContainer from './components/Products/ItemListContainer';

function App() {
  let title = "Foto Tienda";

  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <h1>{title}</h1>
      </header>
      <ItemListContainer greeting="Elige como darle vida a tus fotos"/>
      <Footer />
    </div>
  );
}

export default App;

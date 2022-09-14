import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  let title = "Foto Tienda";

  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <h1>{title}</h1>
      </header>
      <Footer />
    </div>
  );
}

export default App;

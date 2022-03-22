import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner';
import Product from './components/Product/Product'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Product/>
        <p>Productos destacados</p>
      <Product/>
      <ItemListConteiner/>
    </div>
  );
}

export default App;

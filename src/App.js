import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner';
// import Product from './components/Product/Product'

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>Productos destacados</h1>
      <ItemListConteiner className="item-list"/>
    </div>
  );
}

export default App;

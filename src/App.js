import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar/NavBar'
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner';
// import Product from './components/Product/Product'
import HomePage from './pages/Home'
import ContactPage from './pages/Contact'
import NotFoundPage from './pages/NotFound'
import DetailPage from './pages/Detail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/contact" element={<ContactPage />}/>
        <Route path="/" element={<HomePage />}/>
        <Route path="/Home" element={<HomePage />}/>
        <Route path="/HomePage" element={<HomePage />}/>
        {/* <Route path="/Detail/" element={<DetailPage />}/> */}
        <Route path="/:category/:id" element={<DetailPage />}/>
        <Route path="*" element={<NotFoundPage />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

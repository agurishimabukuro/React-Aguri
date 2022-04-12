import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Components
import NavBar from './components/NavBar/NavBar'

// pages
import CartPage from './pages/CartPage'
import HomePage from './pages/Home'
import ContactPage from './pages/Contact'
import NotFoundPage from './pages/NotFound'
import DetailPage from './pages/Detail';

// context
import { ThemeProvider } from './context/ThemeContext';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <ThemeProvider > 
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
                <Route path="/cart" element={<CartPage />}/>
              </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </CartProvider>
    </div>
  );
}

export default App;

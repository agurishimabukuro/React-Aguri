import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//Context
import { CartProvider } from "../src/context/CartContext";
//Componentes
import NavBar from "././components/NavBar/NavBar";
import Footer from "././components/Footer/Footer";
//Views
import Home from "../src/pages/Home";
import Categoria from "../src/pages/Categoria";
import Carrito from "../src/pages/CartPage";
import Detalle from "../src/pages/Detail";
import Error from "../src/pages/NotFound";
import Checkout from "../src/pages/Checkout";
import ContactPage from "../src/pages/Contact"

const App = () => {
	return (
		<CartProvider>
			<Router>
				<div className="App">
					<NavBar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/categoria/:category" element={<Categoria />} />
						<Route path="/:id" element={<Detalle />} />
						<Route path="/carrito" element={<Carrito />} />
            <Route path="/contacto" element={<ContactPage />} />
						<Route path="/checkout" element={<Checkout />} />
						<Route path="*" element={<Error />} />
					</Routes>
					<Footer />
				</div>
			</Router>
		</CartProvider>
	);
};

export default App;

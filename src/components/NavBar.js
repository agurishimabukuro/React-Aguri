import React from 'react'
import Button from '@mui/material/Button';
import "./NavBar.css"
import { FaShoppingCart } from "react-icons/fa";

function NavBar() {
    return(
        <header className='main-header'>
            <img src="inter.png" className="container-logo" alt="logo"></img>
            <ul className='navbar'>
                <li><Button variant="contained">Home</Button></li>
                <li><Button variant="outlined">Nosotros</Button></li>
                <li><Button variant="contained">Productos</Button></li>
                <li><Button variant="outlined">Contacto</Button></li>
            </ul>
            <Button><FaShoppingCart/></Button>
        </header>
    )
}

export default NavBar;
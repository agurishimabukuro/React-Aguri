import React from 'react'
import Button from '@mui/material/Button';
import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget'

function NavBar() {
    return(
        <header className='main-header'>
            <div className="container-logo">
                <img src='react-aguri\public\inter.png' alt="logo"></img>
            </div>
            <ul className='navbar'>
                <li><Button variant="contained">Home</Button></li>
                <li><Button variant="contained">Nosotros</Button></li>
                <li><Button variant="contained">Productos</Button></li>
                <li><Button variant="contained">Contacto</Button></li>
            </ul>
            <Button><CartWidget/></Button>
        </header>
    )
}

export default NavBar;
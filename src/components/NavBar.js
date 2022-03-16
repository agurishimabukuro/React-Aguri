import React from 'react'
import Button from '@mui/material/Button';


function NavBar() {
    return(
        <header className='main-header'>
            <img src="logo192.png" className="container-logo" alt="logo"></img>
            <ul className='navbar'>
                <li><Button variant="contained">Home</Button></li>
                <li><Button variant="outlined">Nosotros</Button></li>
                <li><Button variant="contained">Productos</Button></li>
                <li><Button variant="outlined">Contacto</Button></li>
            </ul>
        </header>
    )
}

export default NavBar;
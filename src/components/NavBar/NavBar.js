import React from 'react'
import Button from '@mui/material/Button';
import Logo from './././img/inter.png'
import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

function NavBar() {
    // const pages = [
    //     {
    //         title:'Home',
    //         url: '/'
    //     },
    //     {
    //         title:'Nosotros',
    //         url: '/nosotros'
    //     }, 
    //     {
    //         title: 'Productos',
    //         url: '/productos'
    //     },
    //     {
    //         title: 'Contacto',
    //         url: '/contacto'
    //     }]
    return(
        <header className='main-header'>
            <div className="container-logo">
                <img src={Logo} alt="logo" className="logoImg"></img>
            </div>
            <ul className='navbar'>
                <li>
                    <Button>
                        <Link to={'/'}> Home </Link>
                    </Button>
                </li>
                <li>
                    <Button>
                        <Link to={'/About'}>Nosotros </Link>
                    </Button>
                </li>
                <li>
                    <Button>
                        <Link to={'/productos/1'}>Productos</Link>
                    </Button>
                </li>
                <li>
                    <Button>
                        <Link to={'/Contact'}> Contacto</Link> 
                    </Button>
                </li>
                {/* {pages.map((page) => {
                    return(
                        <li>
                            <Button className="custom-btn" variant="contained">
                                <Link to={page.url}>{page.title}</Link>
                            </Button>
                        </li>
                    )
                })} */}
            </ul>
            <CartWidget/>
        </header>
    )
}

export default NavBar;
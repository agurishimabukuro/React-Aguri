import React,{useState,useContext} from 'react'
import CartContext from '../../context/CartContext'
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom'

const ItemCount = ({stock, data}) => {
    const [count, setCount] = useState(1)
    const { cartProducts, addProductToCart } = useContext(CartContext)
    const navigate = useNavigate();

    const changePage = () => {
        navigate(`/Cart`)
    }
    const onAdd = () => {
        if(count < stock) {
            setCount(count + 1)
        }
    }
    const addToCart = (e) => {
        e.stopPropagation()  
        console.log("Productos agregados:", cartProducts) 
        addProductToCart(data)
    }
    return(
        <>
            <Button className="btn-custom">-</Button>
            <p>{count}</p>
            <Button onClick={onAdd} className="btn-custom">+</Button>
            <Button onClick={addToCart} className="btn-custom">COMPRAR</Button>

            <Button onClick={changePage} className="btn-custom"> IR AL CARRITO </Button>
        </>
    )
}

export default ItemCount
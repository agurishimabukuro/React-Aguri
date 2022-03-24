import React from 'react';
import {useState} from 'react';
import Button from '@mui/material/Button';

export default function Product(props) {

    return ( <div className = "product-item" >
        <h2> {props.title} </h2> 
        <p> Precio: $ {props.price} </p> 
        <p> Tamaño: {props.size} </p> 

        <ItemCount initial={1} stock={props.stock}/>
        </div>
    )
}

const ItemCount = ({initial,stock,onAdd}) => {
    const [qty, setQty] = useState(initial);

    const addProduct = (num) => {
        setQty(qty + num);
    };

    return ( <div className = "count-container" >
        <div className = "count-container__contador" >
        <button className = "count-container__button" onClick = {() => addProduct(-1)}
        disabled = {qty === initial ? true : null} 
        >
        -
        </button> 
        <span className = "count-container__qty" > {qty} </span> 
        <button 
        className = "count-container__button"
        onClick = {() => addProduct(+1)}
        disabled = {qty === stock ? true : null} 
        >
        +
        </button> 
    </div>

        <Button
        className = "contained"
        onClick = {() => onAdd(qty)}
        disabled = {stock === 0 ? true : null} 
        >
        Añadir 
        </Button> 
    </div>
    );
};
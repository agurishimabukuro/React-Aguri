import React from 'react';
import ItemCount from '../ItemCount/ItemCount.js'
import './Card.css';

export default function Card({data}) {
    const{title, price, size, id, stock,img} = data 

    return ( <div className = "product-item" >
        <h2> {title} </h2> 
        <p> Precio: $ {price} </p> 
        <p> Tamaño: {size} </p> 
        <span><img src={img} alt={title}></img></span>

        <ItemCount initial={1} stock={stock}/>
        </div>
    )
}

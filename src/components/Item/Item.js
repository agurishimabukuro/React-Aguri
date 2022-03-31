import React from 'react';
import ItemCount from '../ItemCount/ItemCount.js'
import './Item.css';

export default function Item({data}) {
    const{title, price, size, id, stock,img} = data 

    return ( <div className = "product-item" >
        <h2> {title} </h2> 
        <p> Precio: $ {price} </p> 
        <p> Tamaño: {size} </p> 
        <img src={img}></img>

        <ItemCount initial={1} stock={stock}/>
        </div>
    )
}

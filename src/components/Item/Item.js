import React from 'react';
import ItemCount from '../ItemCount/ItemCount.js'

export default function Item({data}) {
    const{title, price, size, id, stock} = data 

    return ( <div className = "product-item" >
        <h2> {title} </h2> 
        <p> Precio: $ {price} </p> 
        <p> Tamaño: {size} </p> 

        <ItemCount initial={1} stock={stock}/>
        </div>
    )
}

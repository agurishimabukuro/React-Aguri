import React from 'react';
import ItemCount from './ItemCount/ItemCount.js'

const Item = ({title, price, size, id, stock}) => {

    return ( <div className = "product-item" >
        <h2> {title} </h2> 
        <p> Precio: $ {price} </p> 
        <p> Tamaño: {size} </p> 

        <ItemCount initial={1} stock={stock}/>
        </div>
    )
}

export default Item
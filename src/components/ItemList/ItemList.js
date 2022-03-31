import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import { productList } from '../../data/data.js'

import './ItemList.css'

import { useParams } from 'react-router-dom'

const ItemList = ({children}) => {
    const { Id } = useParams()

    const [products, setProducts] = useState([])

    const getProducts = () => {
        return new Promise((resolve, reject) => {
            return resolve(productList)
        })
    } 

    useEffect( () => {
        setProducts([])
        getProducts().then( (productos) => {
            filterProductById(productos, Id)
        })
    }, [Id])


    const filterProductById = (array , category) => {
        return array.map( (product, i) => {
            if(product.Id === Id) {
                return setProducts(products => [...products, product]);
            }
        })
    }

    return(
        <div className="container-cards">
            <h2> Productos en Oferta</h2>
            {console.log("products: ", products)}
            {products.map( ( product ) =>  <Item data={product} key={product.id}/>)}
        </div>
    ) 
}

export default ItemList;
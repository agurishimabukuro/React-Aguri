import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import mockProductos from '../../data/productsMock'

import './ItemList.css'

import { useParams } from 'react-router-dom'

const ItemList = ({children}) => {
    const { category } = useParams()

    const [products, setProducts] = useState([])

    const getProducts = () => {
        return new Promise((resolve, reject) => {
            return setTimeout( () => { 
                resolve(mockProductos)
            }, 2000)
        })
    }

    useEffect( () => {
        setProducts([])
        getProducts().then( (productos) => {
            category ? filterProductByCategory(productos, category) : setProducts(productos)
        })
    }, [category])


    const filterProductByCategory = (array, category) => {
        return array.map((product, i) => {
            if (product.category === category) {
                return setProducts(products => [...products, product]);
            }
        });
    }

    return(
        <div className="container-cards">
            <h2>Productos destacados</h2>
            {console.log("products: ", products)}
            {products.map( ( product ) =>  <Card data={product} key={product.id}/>)}
        </div>
    ) 
}

export default ItemList;
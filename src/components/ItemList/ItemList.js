import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import mockProductos from '../../data/productsMock'
import db from '../../firebase'
import { collection, getDocs} from 'firebase/firestore'

import './ItemList.css'

import { useParams } from 'react-router-dom'

const ItemList = ({children}) => {
    const { category } = useParams()

    const [products, setProducts] = useState([])

    const getProducts = async () => {
        const itemsCollection = collection(db, 'productos')
        const productSnapshot = await getDocs(itemsCollection)
        console.log("productSnapshot:  ", productSnapshot)
        const productList = productSnapshot.docs.map((doc) => {
            let product = doc.data()
            product.id = doc.id 
            console.log("product: ", product)    
            return product
            } 
        )
        return productList
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
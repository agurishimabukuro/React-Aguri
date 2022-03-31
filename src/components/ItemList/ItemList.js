import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import { productList } from '../../data/data'

const ItemList = () => {
    const [product, setProducts] = useState([]);
    const getProducts = new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(productList);
        }, 2000);
    });
    const getProductsFromDB = async () => {
        try {
            const result = await getProducts;
            setProducts(result);
        } catch (error) {
            console.log(error);
            alert('No podemos mostrar los productos en este momento');
        }
    };
    useEffect (() => {
        getProductsFromDB();
    },[]);
    return(
        <div>
            {product.lenght ? ( <>
            {product.map((product)=> {
                return (
                    <div key={product.id}>
                        <Item
                        title={product.title}
                        price={product.price}
                        size={product.size}
                        stock={product.stock}
                        id={product.id}
                        />
                    </div>
                );
            })
        }
    </>
    ) : (
        <p>Cargando productos</p>
    )
}
</div>
    );
};

export default ItemList;
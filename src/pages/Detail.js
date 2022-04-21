import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import mockProductos from '../../src/data/productsMock'
import ItemCount from '../components/ItemCount/ItemCount'
import CartContext from '../context/CartContext'

const DetailPage = () => {
    const { cartProducts, addProductToCart } = useContext(CartContext)
    const { id, category } = useParams()
    const [product, setProduct] = useState({})

    useEffect( () => {
        filterProductById(mockProductos, id)
    }, [id])

    const filterProductById = (array , id) => {
        return array.map( (product) => {
            if(product.id == id) {
                return setProduct(product)
            }
        })
    }

    const addToCart = (e) => {
        e.stopPropagation()  
        console.log("Productos agregados:", cartProducts) 
        addProductToCart(product)
    }
    
    return(
        <Container className='container-general'> 
            <div className='container-detail'>
            <div className='container-detail__img'>
                <img src={`../${product.image}`} alt="Producto elegido"/>
            </div>
            <div className='container-detail__info'>
                <h3 className='info__title'>{product.title}</h3>
                <p className='info__text'>$ {product.price}</p>
                <p className='info__subtitle'>Tamaño</p>
                <p className='info__text'>{product.size}</p>
                <p className='info__subtitle'>DETALLE</p>
                <p className='info__text detail__text'>{product.detalle}</p>
                <ItemCount></ItemCount>
                <Button onClick={addToCart} className="btn-custom">COMPRAR</Button>
            </div>
            </div>
        </Container>
    )
}

export default DetailPage


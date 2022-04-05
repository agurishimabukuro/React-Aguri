import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {productList} from '../../src/data/data.js'

const DetailPage = () => {
    const { id, category } = useParams()
    const [product, setProduct] = useState({})

    useEffect( () => {
        filterProductById(productList, id)
    }, [id])

    const filterProductById = (array , id) => {
        return array.map( (product) => {
            if(product.id == id) {
                return setProduct(product)
            }
        })
    }
    
    return(
        <Container className='container-general'> 
            <div className='container-detail'>
            <div className='container-detail__img'>
                <img src={`../${product.image}`}/>
            </div>
            <div className='container-detail__info'>
                <h3 className='info__title'>{product.title}</h3>
                <p className='info__text'>$ {product.price}</p>
                <p className='info__subtitle'>Tamaño</p>
                <p className='info__text'>{product.size}</p>
                <p className='info__subtitle'>DETALLE</p>
                <p className='info__text detail__text'>Fina bebida digestiva a base de hierbas.</p>
                <Button className='detail__btn-buy'>COMPRAR</Button>
            </div>
            </div>
        </Container>
    )
}

export default DetailPage


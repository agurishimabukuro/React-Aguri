import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
// import mockProductos from '../../src/data/productsMock'
import ItemCount from '../components/ItemCount/ItemCount'
import CartContext from '../context/CartContext'
import {doc, getDoc} from 'firebase/firestore'
import db from '../firebase'

const DetailPage = () => {
    const { cartProducts, addProductToCart } = useContext(CartContext)
    const { id } = useParams()
    const navigate = useNavigate()
    const [product, setProduct] = useState({})

    const getProduct = async () => {
        const docRef = doc(db, "productos", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()){
            console.log("Document data: ", docSnap.data());
            let product = docSnap.data()
            product.id = docSnap.id 
            setProduct(product)
        }else {
            // doc.data() will be undefined in this case 
            console.log("No such document!");
            navigate('/error')
        }
    }

    useEffect( () => {
        getProduct()
    }, [id])

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


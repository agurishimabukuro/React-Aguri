import Product from '../Product/Product'
import './ItemListConteiner.css'

const ItemListConteiner = ({children}) => {

    return(
        <div className="container-cards">
            <h2> {children} </h2>

            <Product title='Fernet' size='750ml' price={200} stock={12} id='1' />
            <Product title='Vino' size='700ml' price={100} stock={2} id='2' />
            <Product title='Cerveza' size='473ml' price={123} stock={32} id='3' />
            <Product title='Gaseosa' size='2500ml' price={444} stock={22} id='4' />
        </div>
    ) 
}

export default ItemListConteiner;
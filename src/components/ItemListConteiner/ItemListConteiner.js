import Product from '../Product/Product'
import './ItemListConteiner.css'

const ItemListConteiner = ({children}) => {

    return(
        <div className="container-cards">
            <h2> {children} </h2>

            <Product title='Fernet' tamaño='750ml' price={200}/>
            <Product title='Vino' tamaño='700ml' price={100}/>
            <Product title='Cerveza' tamaño='473ml' price={123}/>
            <Product title='Gaseosa' tamaño='2500ml' price={444}/>
        </div>
    ) 
}

export default ItemListConteiner;
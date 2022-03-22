import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner';

const Product = ({children}) => {

    return (
        <div className="container-cards">
            <h2> {children} </h2>

            <ItemListConteiner title='Pantalon' talle='L' price={100}/>
            <ItemListConteiner title='Remera 2' talle='S' price={123}/>
            <ItemListConteiner title='Musculosa' talle='M' price={444}/>
            <ItemListConteiner title='Remera' talle='XL' price={200}/>
        </div>
    ) 
}

export default Product;
export default function Product(props) {

    return(
        <div className="product-item">
            <h2>{props.title}</h2>
            <p>Precio : $ {props.price}</p>
            <p>Tamaño : {props.tamaño}</p>
            <button> Comprar </button>
        </div>
    )
}
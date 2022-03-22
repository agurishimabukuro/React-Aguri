import './ItemListConteiner.css'

export default function ItemListConteiner(props) {

    return(
        <div className="card-item">
            {console.log("console dentro de render")}
            <h2>{props.title}</h2>
            <p>Precio : $ {props.price}</p>
            <p>Talle : {props.talle}</p>
            <button> Comprar </button>
        </div>
    )
}

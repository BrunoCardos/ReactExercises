import './card.css'

function Card(props){


    return (
    <div className="card">
            <span>{props.url}</span>          
            <h2>{props.title}</h2>
            <p>{props.text}</p> 
            <button>Eliminar</button>         
        </div>
        )
}

export default Card;
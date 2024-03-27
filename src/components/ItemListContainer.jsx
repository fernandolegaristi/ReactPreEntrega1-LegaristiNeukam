function ItemListContainer(props) {
    return(
        <div>
            <img className="img-fluid" src={props.imagen} alt="Helado" />
            <h3>{props.nombre}</h3>
            <h4>${props.precio}</h4>
        </div>
    )
}

export default ItemListContainer
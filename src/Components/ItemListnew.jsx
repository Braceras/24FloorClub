import ItemNew from "./ItemNew"

const ItemListNew = ({ productos }) => {
    //<Item key={producto.id} producto={producto} />
    return (
        <section className="container productos">
            <div className="row">
                {productos.map((producto) => <ItemNew producto={producto} />)}
            </div>


        </section>
    )
}

export default ItemListNew
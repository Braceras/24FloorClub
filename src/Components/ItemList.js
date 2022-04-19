import React from 'react'
import Item from "./Item"

const ItemList = ({ productos }) => {
    console.log(productos)
    return (
        <section className="productos display-flex flex-wrap">
            {productos.map((producto) => <Item key={producto.id} producto={producto} />)}

        </section>
    )
}


export default ItemList 


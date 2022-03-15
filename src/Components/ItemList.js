import React from 'react'
import Item from "./Item" 

const ItemList = ({ productos }) => {
    return (
        <section className="productos">
            {productos.map((productos) => {
                return <Item key={productos.id} producto={productos} />
            })}
        </section>
    )
}

export default ItemList










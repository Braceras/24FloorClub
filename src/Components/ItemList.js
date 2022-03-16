import React from 'react'
import Item from "./Item" 

const ItemList = ({ productos }) => {
    console.log(productos);
    
    return (
        <section className="productos">
            {productos.map((producto) => {
                return <Item key={producto.id} producto={producto} />
            
            })}
            
        </section>
    )
}

export default ItemList










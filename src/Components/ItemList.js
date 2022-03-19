import React from 'react'
import Item from "./Item"

const ItemList = ({ productos }) => {
    console.log(productos)
    return (
        <section className="productos">
            {productos.map((producto) => <Item key={producto.id} producto={producto} />)}

        </section>
    )
}

<<<<<<< HEAD
export default ItemList 
=======
export default ItemList










>>>>>>> 58589c0c0b18d226b1de365999e6b48837d437ec

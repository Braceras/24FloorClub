import React from 'react'
import Contador from './Contador'

const ItemDetail = ({ item }) => {

console.log(item);

  return (
    <div>
        <div className='boxCardDetail'>
            <img src={item.img} alt="nonchalantly" className='imgDetail' />
            <h2>{item.nombre}</h2>
            <p className="descripcion">{item.detalle}</p>
            <p>Precio: $ {item.precio}</p>
        </div>

        <Contador stock={10} initial={1} />
    </div>
  )
}

export default ItemDetail
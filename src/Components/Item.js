import React from 'react'
import Contador from './Contador'
import { Link } from 'react-router-dom'


const Item = ({ producto }) => {

  const onAdd = (cantidadSeleccionada) => {
    console.log('Añadir al carrito', cantidadSeleccionada);
  }

  return (
<<<<<<< HEAD
    <Link to='/Producto'>
=======
    <Link to={`/Producto/${producto.id}`}>
>>>>>>> 82e584f49f5a1838c9106588e76ae99aab84f740
    <div className='card-box' >
      <img src={producto.img} alt="Nonchalantly" style={{width:"15rem"}} />
      <h3>{producto.nombre}</h3>
      <p>{producto.detalle}</p>
      <p>Precio: $ {producto.precio}</p>
      <Contador stock={5} initial={1} onAdd={onAdd} />
      
    </div>
    </Link>
    
  )
}

export default Item
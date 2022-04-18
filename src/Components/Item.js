import React from 'react'
import { Link } from 'react-router-dom'


const Item = ({ producto }) => {

  const onAdd = (cantidadSeleccionada) => {
    console.log('Añadir al carrito', cantidadSeleccionada);
  }

  return (

    <Link to={`/Producto/${producto.id}`} className='card-link' >
    <div className='card-box' >
      <img src={producto.img} alt="ImgProduct" style={{width:"15rem"}} />
      <h3 className='h3-nameTittle'>{producto.nombre}</h3>
      <p>{producto.detalle}</p>
      <p><img src={producto.eth} alt='ethPNG' className='ETH' /> <b>{producto.precio}</b></p>
      
    </div>
    </Link>
    
  )
}

export default Item
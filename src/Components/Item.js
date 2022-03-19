import React from 'react'


const Item = ({ producto }) => {


  return (
    <div className='card-box' >
      <img src={producto.img} alt="Nonchalantly" style={{width:"15rem"}} />
      <h3>{producto.nombre}</h3>
      <p>{producto.detalle}</p>
      <p>Precio: $ {producto.precio}</p>
      
    </div>
    
  )
}

export default Item
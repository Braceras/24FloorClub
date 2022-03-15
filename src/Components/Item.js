import React from 'react'


const Item = ({productos}) => {
  return (
    <div>
      <h1>{productos.nombre}</h1>
    </div>
  )
}

export default Item
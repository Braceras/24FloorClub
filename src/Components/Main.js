import React, { useState } from 'react'
import Contador from './Contador'
import TitleLogo from './TitleLogo'
import { useEffect } from 'react'

let productosIiciales = [
  {
    id: 1,
    nombre: 'Producto 1',
    precio: 100 
  },
  {
    id: 2,
    nombre: 'Producto 2',
    precio: 200 
  },
  {
    id: 3,
    nombre: 'Producto 3',
    precio: 300 
  },
]

const Main = () => {

  const [loading, setLoading] = useState(true)
  const [productos, setProductos] = useState([])

  useEffect(() => {
    console.log('Ejecutando useEffect')
      
    setTimeout(() => {
      setProductos(productosIiciales) 
    }, 5000)
  },[]) 

  console.log(productos)

  return (
    <div>

      <TitleLogo/>
      <h2>Bienvenidos!</h2>
      <button onClick={() => setLoading(!loading)} >toggle</button>
      <ul>
        {productos.map((producto) => {
            return <li key={producto.id}>{producto.nombre}</li>
        })}
        
      </ul>
      <Contador/>

    </div>
    
    
  )
}

export default Main 
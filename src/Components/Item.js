import React from 'react'
import { useEffect, useState } from 'react'
import img from '../assets/img/Nonchalantly.png'

const Item = () => {

    let productosIiciales = [
        {
          id: 1,
          nombre: 'Nonchalantly 1',
          precio: 100
        },
        {
          id: 2,
          nombre: 'Nonchalanty 2',
          precio: 200,
        },
        {
          id: 3,
          nombre: 'Nonchalantly 3',
          precio: 300
        },
      ]

    const [loading, setLoading] = useState(true)
    const [productos, setProductos] = useState([])

    useEffect(() => {
        console.log('Ejecutando useEffect')
          
            const pedido = new Promise((res, rej) => {
                setTimeout(() => {
                    setProductos(productosIiciales) 
                  }, 2000)
            })

            pedido
            .then((resultado) => {
                console.log('Bien');
                console.log(resultado);
            })
            .catch((error) => {
                console.log('mal');
                console.log(error);
            })
      },[]) 
    
      console.log(productos)
  return (
    <div>
        <button onClick={() => setLoading(!loading)} >toggle</button>
      <ul>
        {productos.map((producto) => {
            return <li key={producto.id}>{producto.nombre}</li>
        })}
        
      </ul>
    </div>
  )
}

export default Item
import { serverTimestamp } from 'firebase/firestore'
import React from 'react'
import { useContext } from 'react'
import { contexto } from './miContexto'


const Carrito = () => {

  const {carrito, total, cantidad, removeItem} = useContext(contexto)
  console.log(carrito)
  
  const HandleClick = (e, idx) => {
    e.preventDefault()
      removeItem(idx)
  }

  const terminarCompra = () => {
    const orden = {
      buyer : {
        nombre : "Benjamin",
        telefono : "999999",
        email : "benjamin@gmail.com",
      },
      tems : carrito,
      date : serverTimestamp(),
      total : total
    }

    console.log(orden);
  }

  return (
    <div>
      {carrito.map((producto, idx) => (
        <div key={producto.id} className="col-3 bg-2 p-3 detailProd" >
        <img src={producto.img} alt='ImgProduct' style={{width:"15rem"}} />
        <p>{producto.nombre}</p>
        <p><img src={producto.eth} alt='ethPNG' className='ETH' /> <b>{producto.precio}</b></p> <hr/>
        <p>Total: <img src={producto.eth} alt='ethPNG' className='ETH' /> <b>{cantidad * producto.precio}</b> </p>
        <button onClick={(e)=> HandleClick(e,idx)} className='btn-cart'>Borrar</button>
        <button onClick={terminarCompra} className='btn-cart'>Terminar Compra</button> 
      </div>
      ))}
    </div>
  )
}

export default Carrito
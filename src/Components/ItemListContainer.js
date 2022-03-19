import React from 'react'
import ItemList from './ItemList'
import { useEffect, useState } from 'react'
import Noncha from '../assets/img/Nonchalantly.png'



let productosIniciales = [
    {
      id: 1,
      nombre: "Nonchalantly",
      precio: 100,
      img: Noncha,
      detalle: "Pieza de Arte única"
    },
    {
      id: 2,
      nombre: "Nonchalanty 2",
      precio: 200,
      img: Noncha,
      detalle: "Pieza de Arte única"
    },
    {
      id: 3,
      nombre: "Nonchalantly 3",
      precio: 300,
      img: Noncha,
      detalle: "Pieza de Arte única"
    },
    {
      id: 4,
      nombre: "Nonchalantly 4",
      precio: 400,
      img: Noncha,
      detalle: "Pieza de Arte única"
    }
    
]


const ItemListContainer = () => {


    const [loading, setLoading] = useState(true)
    const [productos, setProductos] = useState([])

    useEffect(() => {
        console.log('Ejecutando useEffect')
        
          
            const pedido = new Promise((res, rej) => {
                setTimeout(() => {
                    res(productosIniciales) 
                  }, 2000)
            })
            

            pedido
            .then((resultado) => {
                console.log('Bien');
                //console.log(resultado);
                setProductos(resultado)
            })
            .catch((error) => {
                console.log('mal');
                //console.error(error);
            })

      },[]) 

      console.log(productosIniciales);
      

   return(
       <ItemList productos={productos} />
   )
}

export default ItemListContainer
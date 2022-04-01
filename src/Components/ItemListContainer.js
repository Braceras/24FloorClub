import React from 'react'
import ItemList from './ItemList'
import { useEffect, useState } from 'react'
import Noncha from '../assets/img/Nonchalantly.png'
import { useParams } from 'react-router-dom'



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



    const resultado = useParams()
      console.log(resultado);




    useEffect(() => {
        
          
      
        
        
          
            const pedido = new Promise((res, rej) => {
                setTimeout(() => {
                    res(productosIniciales) 
                  }, 2000)
            })
            

            pedido
            .then((resultado) => {
                //console.log(resultado);
                setProductos(resultado)
            })
            .catch((error) => {
                //console.error(error);
                alert(error)
            })
            .finally(() => {
              setLoading(false)
            })

      },[]) 

      
      

   if(loading){
     return <h3>Cargando...</h3>
   } else {
     return <>
     <ItemList productos={productos} />
     
     </>
   }
}

export default ItemListContainer
import React from 'react'
import ItemList from './ItemList'
import { useEffect, useState } from 'react'
import productos from './productos.json'

console.log(productos);

const ItemListContainer = () => {

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

   if(loading){
        return <h1>Cargando...</h1>
    }else{
        return <ItemList productos={productos}/>
    }
}

export default ItemListContainer
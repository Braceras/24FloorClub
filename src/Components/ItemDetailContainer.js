import React from 'react'
import Noncha from '../assets/img/Nonchalantly.png'
import { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'


let productoInicial = {img: Noncha, nombre: 'Nonchalantly', detalle: 'Pieza de Arte única', precio: 100}


const ItemDetailContainer = () => {


    
    const [item, setItem] = useState({})

    useEffect(() => {
        console.log('Ejecutando useEffect')
        
          
            const card = new Promise((res, rej) => {
                setTimeout(() => {
                    res(productoInicial) 
                  }, 2000)
            })
            

            card
            .then((resultado) => {
                console.log('Bien');
                //console.log(resultado);
                setItem(resultado)
            })
            .catch((error) => {
                console.log('mal');
                //console.error(error);
            })

      },{})

      console.log(productoInicial);


  return (
    <ItemDetail Item={item} />
  )
}

export default ItemDetailContainer
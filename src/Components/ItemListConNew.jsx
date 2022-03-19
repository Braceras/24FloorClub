import React from 'react'
import Noncha from '../assets/img/Nonchalantly.png'
import ItemListNew from './ItemListnew'
import Item from "./ItemNew"

let productosIniciales = [
    {
        id: 1,
        nombre: 'Nonchalantly',
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
    }
]


function ItemListConNew() {
    const [loading, setLoading] = React.useState(true)
    const [productos, setProductos] = React.useState([])

    React.useEffect(() => {
        console.log('Ejecutando useEffect')


        const pedido = new Promise((res, rej) => {
            setTimeout(() => {
                res(productosIniciales)
            }, 2000)
        })


        const res = pedido
            .then((resultado) => {
                console.log('Bien');
                //console.log(resultado);
                setProductos(resultado)
            })
            .catch((error) => {
                console.log('mal');
                //console.error(error);
            })



    }, [])

    console.log(productos)
    return (
        <div className='w-50'><ItemListNew productos={productos} /></div>
    )
}

export default ItemListConNew




import React from 'react'
import { createContext, useState } from 'react'


export const contexto = createContext()
const {Provider} = contexto


const MiProvider = ({ children }) => {
    
    const [carrito, setCarrito] = useState([])
    const [cantidad, setCantidad] = useState(0)
    const [total, setTotal] = useState(false)

    const addItem = (producto, nuevaCantidad) => {
        const copia = carrito.slice(0)
        copia.push({...producto, nuevaCantidad})
        setCarrito(copia)
        setCantidad(cantidad+nuevaCantidad)
        setTotal(total + producto.precio * nuevaCantidad)
    }


    
    const removeItem = (idx)=>{
        const nuevoCarrito = carrito.filter((p, i) => i !== idx)
        setCarrito(nuevoCarrito)
        setCantidad(cantidad >= 0 ? cantidad-1 : 0)
        console.log("Item Borrado");
    }
    const removeAllItems = (producto, nuevaCantidad) => {
        const copia = carrito.slice(0)
        copia.splice({...producto, nuevaCantidad})
        setCarrito(copia)
        setCantidad(0)
        console.log("Item Borrado");
    }

   
    const valorDelContexto = {
        carrito,
        cantidad,
        total,
        addItem,
        removeItem
    }
    return(
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}


export default MiProvider
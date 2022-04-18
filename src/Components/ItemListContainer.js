import React from "react";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {db} from './firebase'
import { collection, getDocs, query, where } from 'firebase/firestore'
//getDocs - getDoc - Collection - updateDoc - addDoc - query - where




const ItemListContainer = () => {
  const [loading, setLoading] = useState(true);
  const [productos, setProductos] = useState([]);
  const { idCategoria } = useParams()


  const resultado = useParams();
  console.log(resultado);

  useEffect(() => {

    if(!idCategoria){

        const productosCollection = collection(db, "productos")
        const pedido = getDocs(productosCollection)
    
      pedido
        .then(res => setProductos(res.docs.map(doc => doc.data())))
        .catch(() => console.error("Oh no! Algo ha salido mal"))
        .finally(() => setLoading(false))
    }else{
      
      const productosCollection = collection(db, "productos")
      const filtro = query(productosCollection, where("category","==",idCategoria))
      const pedido = getDocs(filtro)

      pedido
        .then(res => setProductos(res.docs.map(doc => doc.data())))
        .catch(() => console.error("Oh no! Algo ha salido mal"))
        .finally(() => setLoading(false))
    }




  }, [idCategoria]);


return (
  <>
    { loading ? <h3>Cargando...</h3> : <ItemList productos={productos} /> }
  </>
)
};

export default ItemListContainer;

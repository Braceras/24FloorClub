import React from "react";
import Noncha from "../assets/img/Nonchalantly.png";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

let productoInicial = {
  img: Noncha,
  nombre: "Nonchalantly",
  detalle: "Pieza de Arte única",
  precio: 100,
};

let productosIniciales = [
    {
      id: 1,
      nombre: "Nonchalantly",
      precio: 100,
      img: Noncha,
      detalle: "Pieza de Arte única",
    },
    {
      id: 2,
      nombre: "Nonchalanty 2",
      precio: 200,
      img: Noncha,
      detalle: "Pieza de Arte única",
    },
    {
      id: 3,
      nombre: "Nonchalantly 3",
      precio: 300,
      img: Noncha,
      detalle: "Pieza de Arte única",
    },
    {
      id: 4,
      nombre: "Nonchalantly 4",
      precio: 400,
      img: Noncha,
      detalle: "Pieza de Arte única",
    },
  ];

function ItemDetailContainer() {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const {productoID} = useParams();

  useEffect(() => {
    console.log("Ejecutando useEffect");

    const card = new Promise((res, rej) => {
      setTimeout(() => {
        const elProducto = productosIniciales.filter((producto)=>producto.id === parseInt(productoID))[0];
        res(elProducto);
      }, 2000);
    });

    card
      .then((resultado) => {
        console.log("Bien");
        //console.log(resultado);
        setItem(resultado);
      })
      .catch((error) => {
        console.log("mal");
        //console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <div>
        {loading ? (<h2>Cargando...</h2>):(<ItemDetail item={item}/>)}
      
    </div>
  );
}

export default ItemDetailContainer;

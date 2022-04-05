import React from "react";
import Noncha from "../assets/img/Nonchalantly.png";
import BoredApe from '../assets/img/boredape1.jpg'
import CriptoPunk from '../assets/img/Punk4.jpg'
import TheWeek from '../assets/img/nftTheWeek.jpg'
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";


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
      nombre: "Bored Ape",
      precio: 200,
      img: BoredApe,
      detalle: "Pieza de Arte única Bored Ape",
    },
    {
      id: 3,
      nombre: "Cripto Punk",
      precio: 300,
      img: CriptoPunk,
      detalle: "Pieza de Arte única Cripto Punk",
    },
    {
      id: 4,
      nombre: "NFT The Weeknd",
      precio: 400,
      img: TheWeek,
      detalle: "Pieza de Arte única The Weeknd",
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

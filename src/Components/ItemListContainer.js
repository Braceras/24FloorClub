import React from "react";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import Noncha from "../assets/img/Nonchalantly.png";
import BoredApe from '../assets/img/boredape1.jpg'
import CriptoPunk from '../assets/img/Punk4.jpg'
import TheWeek from '../assets/img/nftTheWeek.jpg'
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

const ItemListContainer = () => {
  const [loading, setLoading] = useState(true);
  const [productos, setProductos] = useState([]);

  const resultado = useParams();
  console.log(resultado);

  useEffect(() => {
    const pedido = new Promise((res, rej) => {
      setTimeout(() => {
        res(productosIniciales);
      }, 2000);
    });

    pedido
      .then((resultado) => {
        //console.log(resultado);
        setProductos(resultado);
      })
      .catch((error) => {
        //console.error(error);
        alert(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h3>Cargando...</h3>;
  } else {
    return (
      <>
        <ItemList productos={productos} />
      </>
    );
  }
};

export default ItemListContainer;

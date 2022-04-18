import React from "react";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import {db} from './firebase'
import { collection, query, where, getDocs } from 'firebase/firestore'

/*

let productosIniciales = [
  {
    id: 1,
    nombre: "Doodles",
    eth: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/1257px-Ethereum_logo_2014.svg.png",
    precio: 0.1,
    img: 'https://doodles.app/images/doodle_toast.png',
    detalle: "Doodle #8374",
  },
  {
    id: 2,
    nombre: "Bored Ape",
    eth: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/1257px-Ethereum_logo_2014.svg.png",
    precio: 12.3,
    img: 'https://img.unocero.com/2021/12/NFT-Bored-Ape.png',
    detalle: "Bored Ape #0320",
  },
  {
    id: 3,
    nombre: "Cripto Punk",
    eth: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/1257px-Ethereum_logo_2014.svg.png",
    precio: 123,
    img: 'https://cryptopotato.com/wp-content/uploads/2022/01/img3_cryptopunks.jpg',
    detalle: "Cripto Punk #3001",
  },
  {
    id: 4,
    nombre: "Mutant Cats",
    eth: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/1257px-Ethereum_logo_2014.svg.png",
    precio: 10,
    img: 'https://mutantcats.io/img/mutant-10.f7e4935b.png',
    detalle: "Mutant Cat #2022",
  },
];
*/

function ItemDetailContainer() {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const {productoID} = useParams();

  

  useEffect(() => {

    const productosCollection = collection(db, "productos")
    const filtro = query(productosCollection, where("id","==", Number(productoID)))
    const pedido = getDocs(filtro)

    pedido
    .then(res => setItem(res.docs[0].data()))
    .catch(() => console.error("Oh no! Algo ha salido mal"))
    .finally(() => setLoading(false))


    console.log(pedido);
 
  }, []);
  return (
    <div>
        {loading ? (<h2>Cargando...</h2>):(<ItemDetail item={item}/>)}
      
    </div>
  );
}

export default ItemDetailContainer;

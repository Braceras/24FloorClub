import React, { useState } from "react";
import Contador from "./Contador";
import { useContext } from 'react'
import { contexto } from './miContexto'

function ItemDetail(props) {

  const { item } = props;

  

  const [seleccionado, setSeleccionado] = useState(false)
  const {addItem} = useContext(contexto)

    const onAdd = (cantidadSeleccionada) => {
      addItem(item, cantidadSeleccionada)
      console.log("Añadido al carrito", cantidadSeleccionada);
      setSeleccionado(cantidadSeleccionada)
    }
  return (
    <div className="container">
      <div className="row">
        <section className="p-0 col-6">
          <img
            src={item?.img}
            alt="nonchalantly"
            className="img-fluid imgDetail"
          />
        </section>
        <section className="col-6 bg-2 p-3 detailProd">
          <h3 className="h3-nameTittle">{item?.nombre}</h3>
          <div className="boxCardDetail"></div>
          <p className="descripcion">{item?.detalle}</p>
          <p><img src={item?.eth} alt='ethPNG' className='ETH' /> <b>{item?.precio}</b></p>
          <Contador stock={3} initial={1} onAdd={onAdd} />
        </section>
      </div>

    </div>
  );
}

export default ItemDetail;

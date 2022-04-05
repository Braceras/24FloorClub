import React from "react";
import Contador from "./Contador";

function ItemDetail(props) {
  const { item } = props;
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
        <section className="col-6 bg-2 p-3">
          <h3>{item?.nombre}</h3>
          <div className="boxCardDetail"></div>
          <p className="descripcion">{item?.detalle}</p>
          <p>Precio: $ {item?.precio}</p>
          <Contador stock={3} initial={1} />
        </section>
      </div>
      <style jsx>{`
        .bg-2 {
          background-color: #f2f2f2;
        }
      `}</style>
    </div>
  );
}

export default ItemDetail;

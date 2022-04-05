import React from "react";
import { Container } from "react-bootstrap";
import TitleLogo from "./TitleLogo";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import { Route, Routes } from "react-router-dom";
import Carrito from "./Carrito";

const Main = () => {
  return (
    <Container as="main" fluid>
      <TitleLogo />

      <h2>Bienvenidos!</h2>

      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/nosotros" element={<ItemListContainer />} />
        <Route
          path="/desarrolladores"
          element={<ItemListContainer />}
        />
        <Route path="producto" element={<ItemDetailContainer />}>
          <Route path=":productoID" element={<ItemDetailContainer />} />
        </Route>
        <Route path="/producto" element={<ItemDetailContainer />} />
        <Route path="/contacto" element={<ItemListContainer />} />
        <Route path="/carrito" element={<Carrito />} />
      </Routes>
    </Container>
  );
};

export default Main;

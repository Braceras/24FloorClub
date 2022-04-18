import React from "react";
import { Container } from "react-bootstrap";
import TitleLogo from "./TitleLogo";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import { Route, Routes } from "react-router-dom";
import Carrito from "./Carrito";
import TestContainer from './TestContainer';


const Main = () => {
  return (
    <Container as="main" fluid>
      <TitleLogo />

      <h2>Bienvenidos!</h2>

      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        
        <Route path="/Doodles/:idCategoria" element={<ItemListContainer />}/>
        <Route path="/MutantCats/:idCategoria" element={<ItemListContainer />} /> 
        <Route path="/BoredApes/:idCategoria" element={<ItemListContainer />} />
        <Route path="/CryptoPunks/:idCategoria" element={<ItemListContainer />} />
        
        <Route path="producto" element={<ItemDetailContainer />}>
          <Route path=":productoID" element={<ItemDetailContainer />} />
        </Route>
        <Route path="/producto" element={<ItemDetailContainer />} />
      
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/test" element={<TestContainer />} />
      </Routes>
    </Container>
  );
};

export default Main;

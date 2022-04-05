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
<<<<<<< HEAD
      

    <Routes>
      <Route path='/' element={<ItemListContainer/>} />
      <Route path='/Nosotros/:idNosotros' element={<ItemListContainer/>} />
      <Route path='/Desarrolladores/:idDesarrolladores' element={<ItemListContainer/>} />
      <Route path='/Producto' element={<ItemListContainer/>} />
      <Route path='Contacto/:idContacto' element={<ItemListContainer/>} />
      <Route path='/carrito' element={<Carrito/>} />
    </Routes>
      
    
=======
>>>>>>> 82e584f49f5a1838c9106588e76ae99aab84f740

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

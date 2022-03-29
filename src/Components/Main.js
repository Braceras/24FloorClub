import React from 'react'
import { Container } from 'react-bootstrap'
import TitleLogo from './TitleLogo'
import ItemListContainer from './ItemListContainer'
import { Route, Routes } from 'react-router-dom'
import Carrito from './Carrito'




const Main = () => {

  

  return (
    <Container as="main" fluid>

      <TitleLogo/>


      <h2>Bienvenidos!</h2>
      

    <Routes>
      <Route path='/' element={<ItemListContainer/>} />
      <Route path='/Nosotros/:idNosotros' element={<ItemListContainer/>} />
      <Route path='/Desarrolladores/:idDesarrolladores' element={<ItemListContainer/>} />
      <Route path='Contacto/:idContacto' element={<ItemListContainer/>} />
      <Route path='/carrito' element={<Carrito/>} />
    </Routes>
      
    

    </Container>
    
    
  )
}

export default Main 
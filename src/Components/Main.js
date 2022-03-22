import React from 'react'
import { Container } from 'react-bootstrap'
import TitleLogo from './TitleLogo'
import ItemListContainer from './ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer'



const Main = () => {

  

  return (
    <Container as="main" fluid>

      <TitleLogo/>
      <h2>Bienvenidos!</h2>
      
      <ItemListContainer/>
      <ItemDetailContainer/>
    

    </Container>
    
    
  )
}

export default Main 
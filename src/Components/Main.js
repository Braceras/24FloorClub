import React from 'react'
import { Container } from 'react-bootstrap'
import Contador from './Contador'
import TitleLogo from './TitleLogo'
import ItemListContainer from './ItemListContainer'



const Main = () => {

  

  return (
    <Container as="main" fluid>

      <TitleLogo/>
      <h2>Bienvenidos!</h2>
      
      <ItemListContainer/>
      
      <Contador stock={10} initial={1} />

    </Container>
    
    
  )
}

export default Main 
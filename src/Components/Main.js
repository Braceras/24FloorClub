import React, { useState } from 'react'
import Contador from './Contador'
import TitleLogo from './TitleLogo'
import Item from './Item'


const Main = () => {

  

  return (
    <div>

      <TitleLogo/>
      <h2>Bienvenidos!</h2>
      <Item/>
      
      <Contador/>

    </div>
    
    
  )
}

export default Main 
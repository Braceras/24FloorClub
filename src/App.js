import React from 'react'

import Header from './Components/Header'
import Main from './Components/Main'
import Footer from './Components/Footer'
import { BrowserRouter } from 'react-router-dom'
import { createContext } from 'react'

export const contexto = createContext({
    carrito : [],
    cantidad : 0,
    total : 0
})

const {Provider, Consumer} = contexto



const App = () => {




  return (
  <BrowserRouter>
    
      <Header />
      <Main />
      <Footer />

    </BrowserRouter>
  
  )
}

export default App
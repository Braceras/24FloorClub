import React from 'react'

import Header from './Components/Header'
import Main from './Components/Main'
import Footer from './Components/Footer'
import { BrowserRouter } from 'react-router-dom'





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
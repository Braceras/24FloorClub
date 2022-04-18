import React from 'react'

import Header from './Components/Header'
import Main from './Components/Main'
import Footer from './Components/Footer'
import { BrowserRouter } from 'react-router-dom'
import MiProvider from './Components/miContexto'




const App = () => {




  return (

    
        <BrowserRouter>

          <MiProvider>
    
            <Header />
            <Main />
            <Footer />

            </MiProvider>

        </BrowserRouter>
    
  )
}

export default App
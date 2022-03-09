import React from 'react'

import Header from './Components/Header'
import Main from './Components/Main'
import Footer from './Components/Footer'




const App = () => {

      let valor_de_a = 1


  return ( <>
      <Header/>
      <Main nombre='Contador:' a={valor_de_a}/>
      <Footer/>

  </>
  )
}

export default App
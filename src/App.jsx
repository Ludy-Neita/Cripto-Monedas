import { useState } from 'react'

import './App.css'

function App() {


  return (
    <> {/* esto se llama fragment, solo se puede retornar algo  */}
      <p> Hola Mundo</p>
      <p>{"Hola Mundo".toUpperCase()}</p>
      <p>{1+1}</p>
    </>

  )
}

export default App

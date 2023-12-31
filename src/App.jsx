import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Formulario from './components/Formulario'
import Resultado from './components/Resultado'
import Spinner from './components/Spinner'
import ImagenCripto from './img/imagen-criptos.png'

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`
const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`

const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #FFF;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after {// esto es la linea de abajo del titulo
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
    margin: 10px auto 0 auto;
  }
` 

function App() {

  const [ lasDosMonedas, setLasDosMonedas ] = useState({})
  const [ resultado, setResultado ] = useState({})
  const [ cargando, setCargando ] = useState(false)

  useEffect(() => {
    
      if(Object.keys(lasDosMonedas).length > 0) {
          
        const cotizarCripto = async () => {
            setCargando(true)
            setResultado({})

            const { monedaDeMiVector, criptomoneda } = lasDosMonedas
            const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${monedaDeMiVector}`

            const respuesta = await fetch(url)
            const resultado = await respuesta.json()

            setResultado(resultado.DISPLAY[criptomoneda][monedaDeMiVector])

            setCargando(false)
        }

        cotizarCripto()
      }
  }, [lasDosMonedas])

  return (
      <Contenedor>
          <Imagen 
            src={ImagenCripto}
            alt="imagenes criptomonedas"
          />

          <div>

              <Heading> Cotiza Criptomonedas al Instante</Heading>
              
              <Formulario 
                setLasDosMonedas={setLasDosMonedas}
              />

              {cargando && <Spinner />}
              
              {resultado.PRICE && <Resultado resultado={resultado} />} 
         
          </div>

      </Contenedor>
  )
}

export default App
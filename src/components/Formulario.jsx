import  { useEffect, useState } from 'react'
import styled from "@emotion/styled";
import useSelectMoneda from '../hooks/useSelectMoneda';
import { miVectorMonedas } from '../data/miVectorMonedas' // este es el array.
import Error from './Error';

const InputSubmit = styled.input`
    background-color: #9497ff;
    border: none;
    width: 100%;
    padding: 10px;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;

    // que cambie de color al ponerse encima.
    border-radius: 5px;
    margin-top: 30px;
    transition: background-color .3s ease;
    &:hover{
      background-color: #7a7dfe;
      cursor: pointer;
    }
`;

// aquí me traigo el prop "setLasDosMonedas" definido en APP:   const [ miVectorMonedas, setLasDosMonedas ] = useState({})
const Formulario = ({ setLasDosMonedas }) => {

    const [monedaDeMiVector, SelectMonedaDeMiVector] = useSelectMoneda('Elige tu moneda', miVectorMonedas);

    // esto viene desde "useSelectMoneda" de: const useSelectMoneda = (label, opciones) => 
    // entonces el label es:'Elige tu moneda' y las opcione es: miVectorMonedas es el array creado


    const [criptos, setCriptos] = useState([]); // esto va primero, guarda lo de la API por eso es un []
    
    const [criptomoneda, SelectCriptoMoneda] = useSelectMoneda('Elige tu CriptoMoneda', criptos);
    // entonces el label es:'Elige tu CriptoMoneda' y las opcione es: criptos esta guarda en "setCriptos"
    // "setCriptos" tiene el array que devuelve de la API "setCriptos(arrayCriptos)"


    const [error, setError] = useState(false);


    useEffect(() => {

        const consultarAPI = async () => {

            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";
            const respuesta = await fetch(url);
            const resultado = await respuesta.json();

            const arrayCriptos = resultado.Data.map(cripto => {

                const objeto = {
                    id: cripto.CoinInfo.Name, // CoinInfo.Name esto es nombres de la API
                    nombre: cripto.CoinInfo.FullName // pero id y nombre, deben ser iguales al del array que creamos para que se muestren.
                }

                return objeto;
            })

            setCriptos(arrayCriptos);
            console.log(resultado); // trae todo lo de la API
            console.log(arrayCriptos); // trae el nombre y el nombre completo
        }

        // llame sola una vez la API

        consultarAPI();

    }, [])


    // cuando le de click en submit no se vaya recargar la pagina

    const handleSubmit = e => {

        e.preventDefault();

        //validar, si moneda y criptomoneda, estan vacios, entonces...
        // setError será true y devolver.

        if ([monedaDeMiVector, criptomoneda].includes("")) {
            setError(true); // si se vuelve en true retonrar implicito
            return;
        }

        setError(false) // setiar el error para limpiarlo cuando este ok.

        setLasDosMonedas({
            monedaDeMiVector,
            criptomoneda
        })
    }

    return (

        <>

            {error && <Error> Todos los campos son obligatorios </Error>}

            <form onSubmit={handleSubmit}>
                <SelectMonedaDeMiVector /> {/* Esto esta dentro de la constante de est componente */}
                <SelectCriptoMoneda /> {/* Esto esta dentro de la constante de est componente */}
                <InputSubmit type='submit' value="cotizar" />
            </form>

        </>
    )
}

export default Formulario;


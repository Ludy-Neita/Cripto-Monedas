
import styled from "@emotion/styled";
import { useState } from "react";

const Label = styled.label`
    color: #fff;
    display: block;
    font-family: 'Lato', sans-serif;
    font-size:24px;
    font-weight: 700;
    margin: 15px 0;
`;

const Select = styled.select`
    width: 100%;
    font-size: 18px;
    padding: 14px;
    border-radius: 10px;
`;

const useSelectMoneda = (label, opciones) => { // props recibidas de Formulario, donde opciones allá esta definido como monedas.

    const [state, setState] = useState('');

    const SelectVariasMonedas = () => (

        //console.log("desde select monedas")
        <>

            <Label> {label} </Label> {/* este label esta creado en Formulario */}

            <Select
                value={state}
                onChange={e => setState(e.target.value)}
            >
                <option value="">
                    Seleccione
                </option>

                {opciones.map(opcion => (

                    <option
                        key={opcion.id}
                        value={opcion.id}
                    >

                        {opcion.nombre}

                    </option>
                ))}

            </Select>

        </>
    )



    return [state, SelectVariasMonedas]
}

export default useSelectMoneda

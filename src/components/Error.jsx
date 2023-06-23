import styled from "@emotion/styled";

const Texto = styled.div`

    background-color: #b7322c;
    color: #fff;
    padding: 15px;
    font-size: 22px;
    text-transform: uppercase;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    text-align: center;
`;

const Error = ({ children }) => {

    // ese children es que captura el error (el texto) que tenga ya la API, ya sea de conexión, de data.
    // esto esta en el "Formulario" {error && <Error> Todos los campos son obligatorios </Error>}
    return (
        <Texto>
            {children}
        </Texto>
    );
}

export default Error;
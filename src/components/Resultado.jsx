import styled from "@emotion/styled";

const Contenedor = styled.div`
    color: #fff;
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;

`;

const Imagen = styled.img`
    display: block;
    width: 120px;
`;

const Texto = styled.p`
    font-size: 18px;
    span{
        font-weight: 700;
    }
`;

const Precio = styled.p`
    font-size: 24px;
    span{
        font-weight: 700;
    }
`;

const Resultado = ( {resultado} ) => { // esto viene del formulario : const resultado = await respuesta.json();

    // estos valores son de la API.
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = resultado;
    
    return (
        <Contenedor>
            <Imagen
               src={`https://cryptocompare.com${IMAGEURL}`} // en la API sale así... para que se vea la img debe tener esa base.
               
                alt="imagen cripto" 
            />

                        <div>
                            <Precio>El precio es de: <span>{PRICE}</span> </Precio>

                            <Texto>Precio más alto del día: <span>{HIGHDAY}</span> </Texto>
                            <Texto>Precio más bajo del día: <span>{LOWDAY}</span> </Texto>
                            <Texto>Variación últimas 24 horas : <span>{CHANGEPCT24HOUR}</span> </Texto>
                            <Texto>Última actualización: <span>{LASTUPDATE}</span> </Texto>
                        </div>
        </Contenedor >
    );
}

export default Resultado;
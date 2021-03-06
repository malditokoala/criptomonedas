import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const ResultadoDiv = styled.div`
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
`;
const Info = styled.p`
  font-size: 18px;
  span {
    font-weight: bold;
  }
`;
const Precio = styled.p`
  font-size: 30px;
`;
const Cotizacion = ({ resultado }) => {
  if (Object.keys(resultado).length === 0) return null;
  console.log(resultado);
  return (
    <ResultadoDiv>
      <Precio>
        El precio es: <span>{resultado.PRICE}</span>
      </Precio>
      <Info>
        El precio mas alto del dia: <span>{resultado.HIGHDAY}</span>
      </Info>
      <Info>
        El precio mas bajo del dia: <span>{resultado.LOWDAY}</span>
      </Info>
      <Info>
        Variacion las ultimas 24 hrs: <span>{resultado.CHANGEPCT24HOUR}</span>
      </Info>
      <Info>
        Ultima actualizacion: <span>{resultado.LASTUPDATE}</span>
      </Info>
    </ResultadoDiv>
  );
};

Cotizacion.propTypes = {
  resultado: PropTypes.object.isRequired,
};
export default Cotizacion;

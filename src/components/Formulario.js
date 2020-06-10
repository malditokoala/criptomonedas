import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";

import useMoneda from "../hooks/useMoneda";
import useCriptomoneda from "../hooks/useCriptomoneda";
import axios from "axios";

const Boton = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`;

const Formulario = () => {
  // state del listado de criptomonedas
  const [listacripto, guardarCriptomonedas] = useState([]);
  const MONEDAS = [
    { codigo: "USD", nombre: "Dolar de los Estados Unidos" },
    { codigo: "MXN", nombre: "Peso Mexicano" },
    { codigo: "EUR", nombre: "Euro" },
    { codigo: "GBP", nombre: "Libra Esterlina" },
  ];

  // Utilizzar useMoneda
  const [moneda, SelectMoneda] = useMoneda("Elige tu Moneda", "", MONEDAS);

  // Utilizar useCriptomoneda
  const [criptomeneda, SelectCripto] = useCriptomoneda(
    "Elige tu criptomoneda",
    "",
    listacripto
  );

  // Ejecutar el llamado a la api
  useEffect(() => {
    const consultarAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
      const resultado = await axios.get(url);
      guardarCriptomonedas(resultado.data.Data);
    };
    consultarAPI();
  }, []);
  return (
    <form>
      <SelectMoneda />
      <Boton type="submit" value="Calcular" />
      <SelectCripto />
    </form>
  );
};

export default Formulario;

import { useEffect, useState } from 'react';
import { CityInfoContainer, ErrorMessage, LeftContainer, RigthContainer } from './styled';

export default function CityInfo({cityInfo}) {

  if(cityInfo === null) return;
  if(cityInfo.erro == true) return (
    <ErrorMessage>Cidade não encontrada :(
    </ErrorMessage>
  )
  return (
  <CityInfoContainer color={cityInfo.color}>
      <LeftContainer>
        <div>
          <h2> Agora: {cityInfo.city} </h2>
        </div>
        <div>
          <h3> Mínima: {cityInfo.min}°C</h3>
          <h3> Máxima: {cityInfo.max}°C</h3>
        </div>
      </LeftContainer>

      <RigthContainer>
        <h3> {cityInfo.weather}</h3>
        <h4> {cityInfo.temp}°C</h4>
      </RigthContainer>
    </CityInfoContainer>
  );
}

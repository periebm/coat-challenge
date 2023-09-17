import { CityInfoContainer, LeftContainer, RigthContainer } from './styled';

export default function CityInfo({cityInfo}) {

  return (
  <CityInfoContainer>
      <LeftContainer>
        <div>
          <h2> Agora: London </h2>
        </div>
        <div>
          <h3> Mínima: 15.9°C</h3>
          <h3> Máxima: 20.4°C</h3>
        </div>
      </LeftContainer>

      <RigthContainer>
        <h3> Nublado</h3>
        <h4> 18.2°C</h4>
      </RigthContainer>
    </CityInfoContainer>
  );
}

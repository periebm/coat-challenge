import { useState } from 'react';
import CityInfo from '../../components/CityInfo';
import Graph from '../../components/Graph';
import {
  MainPageContainer,
  Title,
  SearchContainer,
  StyledInput,
  StyledButton,
} from './styled';
import axios from 'axios';

export default function MainPage() {
  const [city, setCity] = useState('');

  const [cityInfo, setCityInfo] = useState(null);

  function handleChange(e) {
    setCity(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const geoInfo = await axios.get(
        `${import.meta.env.VITE_GEO_URL}direct?q=${city}&limit=5&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }`,
      );

      if (!geoInfo.data[0]) {
        setCityInfo({ city: '', min: 0, max: 0, temp: 0, erro: true });
      } else {
        const weatherInfo = await axios.get(
          `${import.meta.env.VITE_WEATHER_URL}weather?lat=${
            geoInfo.data[0].lat
          }&lon=${geoInfo.data[0].lon}&appid=${
            import.meta.env.VITE_WEATHER_API_KEY
          }`,
        );

        setCityInfo({
          city: weatherInfo.data.name,
          min: weatherInfo.data.main.temp_min,
          max: weatherInfo.data.main.temp_max,
          temp: weatherInfo.data.main.temp,
          erro: false,
        });
      }
    } catch (err) {
      console.log(err.response.data);
    }
  }

  return (
    <MainPageContainer>
      <Title>Levo um casaquinho?</Title>

      <SearchContainer>
        <form onSubmit={handleSubmit}>
          <StyledInput type="text" name="city" onChange={handleChange} />
          <StyledButton type="submit">Buscar</StyledButton>
        </form>
      </SearchContainer>

      <CityInfo cityInfo={cityInfo} />
      <Graph />
    </MainPageContainer>
  );
}

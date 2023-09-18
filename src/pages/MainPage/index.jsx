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
import { setupWeather } from '../../utils/weather';
import { weather_url, geo_url, forecast_url } from '../../utils/url_builder';

export default function MainPage() {
  const [city, setCity] = useState('');
  const [cityInfo, setCityInfo] = useState(null);
  const [forecastInfo, setforecastInfo] = useState(null);

  function handleChange(e) {
    setCity(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const geoInfo = await axios.get(geo_url(city));
      if (!geoInfo.data[0]) {
        setCityInfo({ city: '', min: 0, max: 0, temp: 0, erro: true });
      } else {
        const weatherInfo = await axios.get(
          weather_url(geoInfo.data[0].lat, geoInfo.data[0].lon),
        );

        const translatedWeather = setupWeather(
          weatherInfo.data.weather[0].main,
        );

        setCityInfo({
          city: weatherInfo.data.name,
          min: weatherInfo.data.main.temp_min,
          max: weatherInfo.data.main.temp_max,
          temp: weatherInfo.data.main.temp,
          weather: translatedWeather[0],
          color: translatedWeather[1],
          erro: false,
        });

        const forecast = await axios.get(
          forecast_url(geoInfo.data[0].lat, geoInfo.data[0].lon),
        );
        const formattedForecast = forecast.data.list.map((e) => {
          const DateHour = e.dt_txt.split(' ');
          const partsDate = DateHour[0].split('-');
          const FormattedDate =
            partsDate[2] +
            '/' +
            partsDate[1] +
            '(' +
            getWeekDay(new Date(e.dt_txt)) +
            ')';

          return {
            dt_txt: FormattedDate,
            temp: e.main.temp.toFixed(2),
          };
        });
        setforecastInfo(formattedForecast);
      }
    } catch (err) {
      console.log(err.response.data);
    }
  }

  function getWeekDay(data) {
    const weekDays = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'];
    return weekDays[data.getDay()];
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
      <Graph forecastInfo={forecastInfo} cityInfo={cityInfo} />
    </MainPageContainer>
  );
}

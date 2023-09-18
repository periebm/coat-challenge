import { useEffect, useState } from 'react';
import { GraphContainer } from './styled';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

export default function Graph({ forecastInfo, cityInfo }) {
  const [maxTemp, setMax] = useState(100);
  const [minTemp, setMin] = useState(0);


  function findMinMaxTemperature(forecastInfo) {
    if (!forecastInfo || forecastInfo.length === 0) {
      return { min: null, max: null };
    }

    let min = parseFloat(forecastInfo[0].temp);
    let max = parseFloat(forecastInfo[0].temp);

    for (let i = 1; i < forecastInfo.length; i++) {
      const temperature = parseFloat(forecastInfo[i].temp);
      if (!isNaN(temperature)) {
        if (temperature < min) {
          min = temperature;
        }
        if (temperature > max) {
          max = temperature;
        }
      }
    }

    return { min, max };
  }

  useEffect(() => {
    if (forecastInfo !== undefined) {
      const { min, max } = findMinMaxTemperature(forecastInfo);
      if (min > 0) setMin(0);
      else if (min < 0) {
        setMin(Math.floor(min));
      }
      setMax(Math.ceil(max));
    }
  }, [forecastInfo]);

  if (cityInfo === null || cityInfo.erro == true || !forecastInfo) return;

  return (
    <GraphContainer>
      <LineChart width={600} height={300} data={forecastInfo}>
        <Line type="monotone" dataKey="temp" stroke="orange" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="dt_txt" tick={{ fontSize: 14, fontWeight: 400 }} />
        <YAxis
          domain={[minTemp, maxTemp]}
          tick={{ fontSize: 14, fontWeight: 400 }}
        />
      </LineChart>
    </GraphContainer>
  );
}

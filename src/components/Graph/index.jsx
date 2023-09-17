import { GraphContainer } from './styled';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

export default function Graph({ forecastInfo, cityInfo }) {

  if (cityInfo === null || cityInfo.erro == true || !forecastInfo) return;

  return (
    <GraphContainer>
      <LineChart width={600} height={300} data={forecastInfo}>
        <Line type="monotone" dataKey="temp" stroke="orange" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="dt_txt" tick={{ fontSize: 14, fontWeight: 400 }}/>
        <YAxis tick={{ fontSize: 14, fontWeight: 400 }}/>
      </LineChart>
    </GraphContainer>
  );
}

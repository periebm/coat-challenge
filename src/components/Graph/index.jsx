import { GraphContainer } from './styled';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

export default function Graph() {
  const data = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 }];

  return (
    <GraphContainer>
      <LineChart width={600} height={300} data={data}>
        <Line type="monotone" dataKey="uv" stroke="orange" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>
    </GraphContainer>
  );
}

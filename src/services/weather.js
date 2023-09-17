
import axios from "axios";
import { useState } from "react";

export function useGetCity() {
  const [cityName, setName] = useState('');


  axios.get(`${process.env.REACT_APP_GEO_URL}direct?q=London&limit=5&appid=${process.env.VITE_WEATHER_API_KEY}`)
    .then(res => console.log(res.data))
    .catch(err => alert(err.response.data))

}
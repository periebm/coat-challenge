export function geo_url(city) {
  const GEO_URL = 'http://api.openweathermap.org/geo/1.0/direct';

  return (
    `${GEO_URL}?q=${city}&limit=5&appid=${import.meta.env.VITE_WEATHER_API_KEY}`
  )
}

export function weather_url(lat, lon) {
  const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather';

  return `${WEATHER_URL}?lat=${lat}&lon=${lon}&units=metric&appid=${import.meta.env.VITE_WEATHER_API_KEY}`
}

export function forecast_url(lat, lon) {
  const FORECAST_URL = 'https://api.openweathermap.org/data/2.5/forecast';

  return `${FORECAST_URL}?lat=${lat}&lon=${lon}&units=metric&appid=${import.meta.env.VITE_WEATHER_API_KEY}`
}
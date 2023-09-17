import * as colors from '../constants/colors';

export function setupWeather(weatherEn) {
  switch (weatherEn) {
    case 'Clear':
      return ['Céu aberto', colors.clearColor];
    case 'Clouds':
      return ['Nublado', colors.cloudsColor];
    case 'Rain':
      return ['Chovendo', colors.rainColor];
    case 'Snow':
      return ['Nevando', colors.snowColor];
    case 'Thunderstorm':
      return ['Tempestade', colors.thunderstormColor];
    case 'Drizzle':
      return ['Chuviscando', colors.drizzleColor];
    case 'Mist':
      return ['Neblina', colors.mistColor];
    case 'Haze':
      return ['Neblina', colors.mistColor];
    default:
      return [weatherEn,'black'];
  }
}
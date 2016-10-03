import axios from 'axios';
import { FETCH_WEATHER } from './action_types'

const API_KEY = '60680212f39e06a473f9f1196643ffd3';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;

  const request = axios.get(url);

  console.log('request: ', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}

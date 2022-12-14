import https from 'https';
import { getKeyValue } from './storage.service.js';
import { CONFIG } from '../constants/index.js';
import axios from 'axios';

const getWeather = async (city) => {
  const token = process.env.TOKEN ?? await getKeyValue(CONFIG.token);

  if (!token) {
    throw new Error('Не задан ключ API, задайте его через команду -t [API_KEY]')
  }

  const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
    params: {
      q: city,
      appid: token,
      lang: 'ru',
      units: 'metric'
    }
  });

  return data;
}

export {
  getWeather
}

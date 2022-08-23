#!/usr/bin/env node
import { printSuccess, printError , saveKeyValue, getWeather } from "./services/index.js";
import { CONFIG } from './constants/index.js';
import { getFileData, getKeyValue, printWeather } from './services/index.js';
import { join, dirname } from 'path';


const saveToken = async (token) => {
  if (!token.length) {
    printError('Не передан токен');

    return;
  }
  try {
    await saveKeyValue(CONFIG.token, token);

    printSuccess('Токен сохранён')
  } catch (e) {
    printError(e.message);
  }
}

const saveCity = async (city) => {
  if (!city.length) {
    printError('Не передан город');

    return;
  }
 
  try {
    const cityFormatted = city[0].toUpperCase() + city.slice(1).toLowerCase();
    await saveKeyValue(CONFIG.city, cityFormatted);

    printSuccess('Город сохранён')
  } catch (e) {
    printError(e.message);
  }

};

const getForecast = async () => {
  try {
    const city = await getKeyValue(CONFIG.city);
    const weather = await getWeather(city);

    printWeather(weather);
  } catch (e) {
    if (e?.response?.status == 404) {
      printError('Неверно указан город');
    } else if (e?.response?.status == 401) {
      printError('Неверно указан токен');
    } else {
      console.log(e.message);
    }

  }
}

export {
  saveToken,
  saveCity,
  getForecast
}

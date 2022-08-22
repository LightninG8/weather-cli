#!/usr/bin/env node
import { getArgs } from "./helpers/index.js";
import { printHelp, printSuccess, printError , saveKeyValue, getWeather } from "./services/index.js";
import { CONFIG } from './constants/index.js';

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

const getForcast = async () => {
  try {
    const weather = await getWeather('moscow');
    console.log(weather);  
  } catch (e) {
    if (e?.response?.status == 404) {
      printError('Неверно указан город');
    } else if (e?.response?.status == 401) {
      printError('Неверно указан токен');
    } else {
      printError(e.message);
    }

  }
}
const initCLI = async () => {
  const args = getArgs(process.argv);
  
  if (args.h) {
    // Print help
    printHelp();
  }

  if (args.s) {
    // Save sity
  }

  if (args.t) {
    // Save token
    await saveToken(args.t)
  }

  getForcast();

}

initCLI();

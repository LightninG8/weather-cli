#!/usr/bin/env node
import { getArgs } from "./helpers/index.js";
import { printHelp } from "./services/index.js";
import { saveToken, saveCity, getForecast } from './utils.js';

const initCLI = async () => {
  const args = getArgs(process.argv);
  
  if (args.h) {
    // Print help
    printHelp();
  }

  if (args.c) {
    // Save city
    await saveCity(args.c);
  }

  if (args.t) {
    // Save token
    await saveToken(args.t)
  }

  if (!Object.keys(args).length) {
    getForecast();
  }
}

initCLI();

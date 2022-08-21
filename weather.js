#!/usr/bin/env node
import { getArgs } from "./helpers/index.js";
import { printHelp } from "./services/index.js";

const initCLI = () => {
  const args = getArgs(process.argv);

  console.log(args);


  if (args.h) {
    // Print help
    printHelp();
  }

  if (args.s) {
    // Save sity
  }

  if (args.t) {
    // Save token
    saveKeyValue('token', args.t)
  }

}

initCLI();

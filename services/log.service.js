import chalk from 'chalk';
import dedent from 'dedent-js'
console.log(chalk());

const printError = (error) => {
  console.log(`${chalk.bgRed('ERROR')} ${error}`);
}

const printSuccess = (error) => {
  console.log(`${chalk.bgGreen('SUCCESS')} ${error}`);
}

const printHelp = () => {
  console.log(dedent(`
    ${chalk.bgCyan.bold(' HELP ')}
    Без параметров - вывод погоды
    -s [CITY] для установки города
    -h для вывода помощи
    -t [API_KEY] для сохранения токена
  `));
}

export {
  printError,
  printSuccess,
  printHelp
}

import chalk from 'chalk';
import dedent from 'dedent-js'
import { iconsList } from '../constants/index.js';

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

const printWeather = (weather) => {
  console.log(dedent(`
  ${chalk.bgYellow.bold(' WEATHER ')} Погода в городе ${chalk.black.bgWhite(` ${weather.name} `)}
  ${iconsList[weather.weather[0].icon] ?? '*'}  ${weather.weather[0].description}
  Температура: ${weather.main.temp}°C (Ощущается как ${weather.main.feels_like}°C)
  Влажность: ${weather.main.humidity}%
  Скорость ветра: ${weather.wind.speed} м/с
`));
};



export {
  printError,
  printSuccess,
  printHelp,
  printWeather
}

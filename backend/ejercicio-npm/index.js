import chalk from 'chalk';
import * as cowsay from "cowsay"
import dayjs from 'dayjs';

console.log('Hola mundo, este es mi primer ejercicio con Yarn');

console.log(chalk.blue('Hello world!'));
console.log(chalk.red('¡Hola mundo!'));
console.log(chalk.green('¡Hola mundo!'));
console.log(chalk.yellow('¡Hola mundo!'));

console.log(cowsay.say({
    text : "I'm a moooodule",
    e : "oO",
    T : "U "
}));

console.log(chalk.blue(dayjs().format('DD/MM/YYYY HH:mm')));
console.log(chalk.red(dayjs().format('MM/DD/YY HH:mm')));

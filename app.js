const { crear } = require('./helpers/multiplicar');
const argv = require('./config/yargs')
const colors = require('colors');

console.clear();


console.log(argv);
console.log('base: yargs', argv.base);

crear(argv.b, argv.l, argv.h)
    .then(nombreArc => console.log(nombreArc.green, 'creado'))
    .catch(err => console.log(err))

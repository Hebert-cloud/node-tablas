const argv = require('yargs')
    .option('b',{
        alias: 'base',
        type: 'number',
        describe: 'Base numerica a multiplicar',
        demandOption: true
    }).option('h',{
        alias: 'limite',
        type: 'number',
        describe: 'limite de numeros a multiplicar por la base',
        demandOption: true,
        default: 10
    }).option('l',{
        alias: 'listar',
        type: 'boolean',
        describe: 'Muestra la tabla en pantalla',
        default: false
    }).check((argv, options)=>{
        if (isNaN(argv.b)) {
            throw 'La base debe ser un número'
        }
        return true;
    }).argv;
    
module.exports = argv;
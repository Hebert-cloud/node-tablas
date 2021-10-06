const fs = require('fs');   
const colors = require('colors');

const crear = async (base, band, limit) =>{

    try {
        
        let salida = '', consola = '';
        for (let i = 0; i <= limit; i++) {
            const res = i * base;
            consola += (`${i} ${'x'.red} ${base} = ${colors.yellow(res)}\n`);
            salida += (`${i} x ${base} = ${res}\n`);
        } 
        if (band === true) {
            console.log('=================='.green);
            console.log(`tabla del ${base}`.yellow);
            console.log('=================='.green);
            console.log(consola);
        } 
        fs.writeFileSync(`./salida/tabla del ${base}.txt`, salida);
        return  `tabla del ${base}.txt`;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    crear
}

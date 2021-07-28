

const {crearArchivo}=require('./funciones/multiplicar');
const yargs=require('yargs').argv;

console.log('argumentos de consola',process.argv);
console.log(yargs);

const base=yargs.base;
console.clear();

crearArchivo(base)
    .then(res=>console.log(res))
    .catch(err=>console.log(err));




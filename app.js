const { argv } = require('./config/yargs.js');
const { crearArchivo } = require('./helpers/multiplicar.js');
// const { hasta } = require('./helpers/hasta.js');

require('colors');//Es lo mismo.
// const { colores } = require('colors');

console.clear();//Limpiando la consola

// console.log(process.argv);
// console.log(argv); //Para saber que tiene y cómo funciona yargs




// const [,,arg3] = process.argv;
// //split separa o parte lo que haya, siempre y cuando se encuentre un "=".
// const [,base = 5] = arg3.split('=');//base = 5 "En caso de no recibir un valor, tomará el 5 por default."

// console.log(base);


// const base = 91;

    crearArchivo(argv.b,argv.l,argv.t)//Pasando parámetro o argumentos, el contenido es lo que tenga argv.b ó argv.l (Son los comandos declarados en option.)
    .then (nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'.bgRed))//Si es correcto, imprime el nombre del archivo más la palabra creado.
    .catch( error => console.log(error));//Si es incorrecto, imprime el error.
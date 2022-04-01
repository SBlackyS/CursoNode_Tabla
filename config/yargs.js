const { describe } = require('yargs');

const argv = require('yargs') //Requiriendo el paquete yargs
                .option('b', { //Opción "b", si la encuentra puede arrancar Ó también si encuentra "base", necesita antes el "-" ó "--"
                    alias: 'base',
                    type: 'number',//El comando "b" (También objeto), es de tipo número.
                    demandOption: true,//Requiriendo que  haya una entrada.
                    describe: 'Es la base de la tabla de multiplicar.'
                })
                .option('l',{//Opción "l", si la encuentra puede arrancar Ó también si encuentra "listar", necesita antes el "-" ó "--"
                    alias: 'listar',
                    type: 'boolean',//El comando "l" (También objeto), es de tipo booleano.
                    default: false,//Poniendo el valor por defecto de falso
                    describe: 'Muestra la tabla de multiplicar'
                })
                .option('t',{//Esta opcion indica hasta que número se multiplicará.
                    alias:'hasta',
                    type: 'number',
                    default:10,
                    describe:'Indica hasta que número se va a multiplicar.'
                })
                .check((argv, options) =>{ //Checando si la constante recibió datos.
                    if(isNaN(argv.b)){//Corroborando si el usuario insertó un número y NO un string
                        throw 'La base tiene que ser un número'
                    }
                    return true;//Regresando el valor como "true".
                })
                .argv;
                //Finalización dde la constante y el paquete yargs.
module.exports = {argv};
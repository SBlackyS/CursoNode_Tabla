const fs = require('fs');
const { argv } = require('process');

const crearArchivo = async(base, list, hasta) =>{
    try {//Intenta esto.
        

        let salida ='';

        for(let i = 1; i <= hasta; i++){
            salida += `${base} x ${i} = ${base * i}\n`;//Estoy diciendo que la salida = salida + "El nuevo valor".
        }
        if(list===true){
        console.log("===================");
        console .log(`   Tabla del: ${base}   `);
        console.log("===================");
        console.log(salida);
    }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`;
    } catch (error) {
        throw error; //En caso de que salga mal.
    }
        
    /* OPCION 1
    return new Promise((resolve, reject) => {

        console.log("===================");
        console .log("   Tabla del: 5   ");
        console.log("===================");

        let salida =''; //Creando variable de salida.

        for(let i = 1; i <= 10; i++){
            salida += `${base} x ${i} = ${base * i}\n`;//Estoy diciendo que la salida = salida + "El nuevo valor".
        }
        console.log(salida);

    //Con el paquete "fs" declarada al inicio, estamos usando una función de escritura en un archivo, el cual recibe como parámetro el nombre del mismo, la "salida" que es lo que pondrá dentro y por último, en caso de que de error mandará un mensaje. 
        // fs.writeFile(`tabla-${base}.txt`, salida, (error) => {
        //     if(error) throw error;//Si sale error, manda el mensaje del error.
        //     console.log(`tabla-${base}.txt creada.`);
        // });
        fs.writeFileSync(`tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;
    })*/
    
}



module.exports = {
    crearArchivo   
}
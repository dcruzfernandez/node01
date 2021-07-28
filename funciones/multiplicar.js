const fs=require('fs');

const crearArchivo=(base)=>{
    return new Promise((resolve,reject)=>{
        let salida=`Tabla del ${base}\n`;
    
        for (let i = 0; i < 11; i++) {
            salida+=(`${base} x ${i} = ${base*i}\n`);  
        }
        fs.writeFile('tabla.txt',salida,(err)=>{
            if(err) reject(err);

            resolve('Archivo creado');
        });
    });  
}

module.exports={
    crearArchivo
}


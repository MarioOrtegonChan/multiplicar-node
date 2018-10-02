//Requires 
const fs = require('fs');

let listarTabla = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base) || !Number(limite)) {
            reject('Los parametros ingresados no son numeros')
            return;

        }
        for (let i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${i * base}`);
        }
    })

}

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base) || !Number(limite)) {
            reject('Los parametros ingresados no son numeros')
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${ i * base}\n`;
        }

        //const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

            if (err) reject(err)
            else
                resolve(`tabla-${base}.txt`)


        });

    });
}
module.exports = {
    crearArchivo,
    listarTabla
}
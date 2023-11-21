const fs = require("fs");

const crearArchivo = async (base = 5, hasta = 10, listar = false) => {
    try {
        let salida = "";
        let consola = "";

        for (let i = 1; i <= hasta; i++) {
            consola += `${base} ${"x".blue} ${i} ${"=".green} ${base * i}\n`;
            salida += `${base} x ${i} = ${base * i}\n`;
        }
        if (listar) {
            console.log("===================".magenta);
            console.log(" multiplo del: ".yellow, base);
            console.log("===================".magenta);
            console.log(salida);
        }

        fs.writeFileSync(`./salida/tablas-${base}.txt`, salida);

        // fs.writeFile("tablas.txt", salida, (err) => {
        //     if (err) throw err;
        //     console.log("tablas de multiplicar creadas");
        // });

        return `tabla-${base}.txt`;
    } catch (err) {
        throw new Error(err, "error");
    }
};

module.exports = {
    crearArchivo,
};

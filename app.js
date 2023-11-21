const argv = require("./config/yargs");
const { crearArchivo } = require("./helpers/multiplicar");

require("colors");

console.clear();

// console.log(argv);

// const [, , arg3 = "base=9"] = process.argv;
// const [, base = 9] = arg3.split("=");

// const base = 1;

crearArchivo(argv.b, argv.h, argv.l)
    .then((nombreArchivo) => console.log(nombreArchivo.cyan, "creado"))
    .catch((err) => console.log(err));

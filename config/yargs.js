const argv = require("yargs")
    .option("b", {
        alias: "base",
        type: "number",
        demandOption: true,
        describe: "Es la base de la tabla de multiplicar",
    })
    .option("h", {
        alias: "hasta",
        type: "number",
        demandOption: 10,
        describe: "Limite de la tabla de multiplicar",
    })
    .option("l", {
        alias: "listar",
        type: "boolean",
        demandOption: true,
        default: false,
        describe: "Muestra la tabla en consola",
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw new Error("Only 0 or 10 files may be passed.");
        }
        return true;
    }).argv;

module.exports = argv;

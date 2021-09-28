//npm init -y cria projeto sem questions

//Node encapsula tudo com uma função anonima que será o wrapper
//(function(exports, require, module, __filename, __dirname){}

module.exports = function () {
  console.log("ok");
};

console.log(__filename);
console.log(__dirname);

//Usando o filesystem
const fs = require("fs");

fs.mkdir("./teste", () => {
  console.log("diretorio criado");
});

fs.writeFile("./teste/teste.txt", "Nadine te amo <3", () => {
  console.log("ok");
});

fs.readFile("./teste/teste.txt", (err, data) => {
  console.log(data);
});

const calculadora = require("./teste/somemodule");

console.log(calculadora.subtracao(20, 1));
console.log(calculadora.adicao(20, 1));
console.log(calculadora.multipliacao(20, 2));
console.log(calculadora.divisao(20, 2));

//testand o express
const express = require("./teste/server_express");
console.log(express());

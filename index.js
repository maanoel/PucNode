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

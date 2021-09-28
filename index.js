const x = 1 + 1;

console.log(x);

//Node encapsula tudo com uma função anonima que será o wrapper
//(function(exports, require, module, __filename, __dirname){}

module.exports = function () {
  console.log("ok");
};

console.log(__filename);
console.log(__dirname);

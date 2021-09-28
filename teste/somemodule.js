//Só pode existir um exports por vez

module.exports = {
  subtracao: (n1, n2) => {
    return n1 - n2;
  },
  adicao: (n1, n2) => n1 + n2,
  multipliacao: (n1, n2) => n1 * n2,
  divisao: (n1, n2) => n1 / n2,
};

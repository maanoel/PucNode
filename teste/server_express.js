module.exports = () => {
  const express = require("express");
  const app = express();
  const port = 3000;

  const logMiddleware = (req, res, next) => {
    console.log("API recebeu uma isnformação");
    next(); //isso continua a execução da pipeline
  };

  app.use(logMiddleware); //adicionando o midware a pipeline
  app.use(express.static("./teste/site"));
  app.get("/", (req, res) => {
    // req.params
    // req.body
    // etc...
    res.send("Hello World!");
  });

  app.get("/pt", (req, res) => {
    res.send("Olá teste!");
  });

  // app.post("/post", (req, res) => {
  //   req.send({ status: "OK" });
  // });

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
};

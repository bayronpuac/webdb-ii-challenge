const express = require("express");
const server = express();

const carRouter = require('./data/actions/actionsRouter');

server.get("/", (req, res) => {
  res.send(`<h2>Knex!</h2>`);
});

server.use(express.json());
server.use("/api/cars", carRouter);

module.exports = server;
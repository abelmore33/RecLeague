const express = require("express");
const cors = require("cors");
const playersRouter = require("./players/players-router");
const teamsRouter = require("./teams/teams-router");
const scoresRouter = require("./scores/scores-router");

const server = express();

server.use(cors());
server.use(express.json());

server.use("/api/players", playersRouter);
server.use("/api/teams", teamsRouter);
server.use("/api/scores", scoresRouter);

module.exports = server;

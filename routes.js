// router
const routes = require("express").Router();

// import moudles
const { getStart } = require("./controllers");

routes.get("/", getStart);
module.exports = routes;

module.exports = app => {
    const movies = require("../controllers/movie.controller.js");
  
    var router = require("express").Router();
  
  
    router.get("/", movies.findAll);

    router.get("/:id", movies.findOne);

    router.post("/", movies.create);
  
  
    app.use('/api/movies', router);
  };
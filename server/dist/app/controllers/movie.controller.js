"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const Movie = models_1.db.movie;
exports.create = (req, res) => {
    if (!req.body.title) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const movie = {
        title: req.body.title,
        description: req.body.description,
        genres: req.body.genres,
        year: req.body.year,
    };
    Movie.create(movie)
        .then((data) => {
        res.send(data);
    })
        .catch((err) => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Movie."
        });
    });
};
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;
    Tutorial.findAll({ where: condition })
        .then(data => {
        res.send(data);
    })
        .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving tutorials."
        });
    });
};
exports.findOne = (req, res) => {
};
exports.update = (req, res) => {
};
exports.delete = (req, res) => {
};
exports.deleteAll = (req, res) => {
};
exports.findAllPublished = (req, res) => {
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = (sequelize, DataType) => {
    const Movie = sequelize.define("movie", {
        id: {
            type: DataType.STRING,
            primaryKey: true,
        },
        description: {
            type: DataType.STRING
        },
        genres: {
            type: DataType.STRING
        },
        year: {
            type: DataType.DATE
        },
        title: {
            type: DataType.STRING
        },
    });
    return Movie;
};

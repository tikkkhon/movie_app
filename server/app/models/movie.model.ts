import {DataTypes} from "sequelize";

module.exports = (sequelize: any, DataType: typeof DataTypes) => {
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
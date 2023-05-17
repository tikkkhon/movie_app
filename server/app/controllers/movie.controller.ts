import {db} from "../models";
import {Response} from "express";
import {IMovieType} from "../models/types";

const Movie = db.movie;

exports.create = (req: Request, res: Response) => {
    if (!(req.body as any).title) {
        res.status(400).send({
            message: "нет контента"
        });
        return;
    }

    const movie = {
        title: (req.body as any).title,
        description: (req.body as any).description,
        genres: (req.body as any).genres,
        year: (req.body as any).year,
    };

    Movie.create(movie)
        .then((data: any) => {
            res.send(data);
        })
        .catch((err: any) => {
            res.status(500).send({
                message:
                    err.message || "Ошибка"
            });
        });
};

exports.findAll = (req: Request, res: Response) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

    Movie.findAll(title)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ошибка"
            });
        });
    };

exports.findOne = (req: Request, res: Response) => {
    const id = req.params.id;

    Movie.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Ошибка нахождения=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Ошибка id=" + id
        });
      });
};


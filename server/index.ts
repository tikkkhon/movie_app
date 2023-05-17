import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';
import {db} from "./app/models";

const bodyParser = require("body-parser");
const cors = require("cors");

dotenv.config();

const app: Express = express();
var corsOptions = {
    origin: process.env.APP_URI
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

require("./app/routes/movie.routes")(app);

const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to movie app backend');
});


app.listen(port, () => {
    db.sequelize?.sync()
        .then(() => {
            console.log("Synced db.");
        })
        .catch((err) => {
            console.log("Failed to sync db: " + err.message);
        });
});
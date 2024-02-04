import express from "express";
import "express-async-errors";
import morgan from "morgan";

type Planet = {
    id: number;
    name: string;
  };

  type Planets = Planet[];

  let planets: Planets = [
    {
      id: 1,
      name: "Earth",
    },
    {
      id: 2,
      name: "Mars",
    },
  ];

const app = express();
const port = 3000;

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.status(200).json(planets);
});

app.listen(port, () => {
  console.log(`Exercise 12 listener on port http:/localhost:${port}`);
});

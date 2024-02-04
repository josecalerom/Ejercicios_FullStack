import express from "express";
import "express-async-errors";
import morgan from "morgan";
import Joi from "joi";

const app = express();
const port = 3000;

app.use(morgan("dev"));
//We have to do this to accept POST
app.use(express.json());

type Planet = {
    id: number,
    name: string
};

type Planets = Planet[];

let planets: Planets = [
    {id: 1, name: "Earth"},
    {id: 2, name: "Mars"},
    {id: 3, name: "Jupiter"}
];

//GET method

app.get("/api/planets", (req, res) => {
    res.status(200).json(planets);
});

app.get("/api/planets/:id", (req, res) => {
    const { id } = req.params;
    const planet = planets.find(p => p.id === Number(id));
    res.status(200).json(planet);
});

//POST method

const planetSchema = Joi.object({
    id: Joi.number().integer().min(1).required(),
    name: Joi.string().min(1).required(),
  });

app.post("/api/planets", (req, res) => {
    const { id, name } = req.body;
    const newPlanet: Planet = {id, name};
    const { error, value } = planetSchema.validate(newPlanet);

    if(error){
        res.status(400).json({msg: `Invalid planet (${error.message}).`});
    }else{
        planets = [...planets, newPlanet];
        res.status(201).json({msg: "The planet was created."});
    }

});

//PUT method: update method

app.put("/api/planets/:id", (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    const { error, value } = planetSchema.validate({id, name});

    if(error){
        res.status(400).json({msg: `Invalid planet (${error.message}).`});
    }else{
        console.log(planets);
        planets = planets.map(p => p.id === Number(id) ? ({...p, name}) : p);
        res.status(200).json({msg: "The planet was updated."});
    }
});

//DELETE method

app.delete("/api/planets/:id", (req, res) => {
    const { id } = req.params;
    planets = planets.filter(p => p.id !== Number(id));

    console.log(planets);

    res.status(200).json({msg: "The planet was deleted."});
});

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
});

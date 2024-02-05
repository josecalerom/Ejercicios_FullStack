import express from "express";
import "express-async-errors";
import morgan from "morgan";
import { getAll, getOneByID, create, updateByID, deleteByID } from "./src/controllers/planets";

const app = express();
const port = 3000;

app.use(morgan("dev"));
//We have to do this to accept POST
app.use(express.json());



//GET method

app.get("/api/planets", getAll);

app.get("/api/planets/:id", getOneByID);

//POST method

app.post("/api/planets", create);

//PUT method: update method

app.put("/api/planets/:id", updateByID);

//DELETE method

app.delete("/api/planets/:id", deleteByID);

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
});

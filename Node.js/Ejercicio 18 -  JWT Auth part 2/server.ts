import express from "express";
import "express-async-errors";
import morgan from "morgan";
import {
  getAll,
  getOneByID,
  create,
  updateByID,
  deleteByID,
  createImage,
} from "./src/controllers/planets";
import multer from "multer";
import { logIn, signUp } from "./src/controllers/users";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

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

//New Route to add an image file
app.post("/api/planets/:id/image", upload.single("image"), createImage);

app.post("/api/users/login", logIn);
app.post("/api/users/signup", signUp);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});

import express, { json, urlencoded } from "express";
import morgan from "morgan";

const app = express();

app.use(urlencoded({ extended: false }));
app.use(json());
app.use(morgan("dev"));

app.set("views", __dirname + "/views");
app.set("view engine", "pug");

app.listen(8000, () => {
  console.log("Opened in port http://localhost:8000");
});

app.get("/", (req, res) => {
  res.render("index.pug");
});

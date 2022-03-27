import express, { json, urlencoded } from "express";
import morgan from "morgan";
import db from "./db";

const app = express();

app.use(urlencoded({ extended: false }));
app.use(json());
app.use(morgan("dev"));

app.set("views", __dirname + "/views");
app.set("view engine", "pug");

app.listen(8000, () => {
  console.log("Opened in port http://localhost:8000");
});

app.get("/", async (req, res) => {
  res.render("index.pug");
});

app.post("/", async (req, res) => {
  console.log(req, req.body);
});

// app.get('/usuario', async (req, res) => {
//   let some = await db.tarjeta.findMany();
//   if (some.length > 0) {
//     await db.tarjeta.create({
//       data: {
//         nombre:

//       }
//     })
//   } else {
//     res.send('Ya existen los registros')
//   }
// })

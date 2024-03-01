import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import viewEngine from "./config/viewEngine.mjs";
import initWebRoutes from "./route/index.mjs";

const app = express();

app.use(
  cors({
    origin: true,
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoutes(app);

app.listen(3000, () => {
  console.log("API listening on port 3000");
});

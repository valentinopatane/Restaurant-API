import http from "http";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import categoriesRouter from "./routes/categories.js";
import platesRouter from "./routes/plates.js";
import usersRouter from "./routes/users.js";
import runDb from "./db/mongo.js";
const app = express();
const httpServer = http.createServer(app);

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const PORT = 5000;

app.use("/api/categories", categoriesRouter);
app.use("/api/plates", platesRouter);
app.use("/", usersRouter);

runDb();
const server = httpServer.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port: ${process.env.PORT || PORT}`);
});
server.on("error", (error) => console.log(`Error en servidor: ${error}`));

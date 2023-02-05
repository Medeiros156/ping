import express from "express";
import bodyParser from "body-parser";

import router from "./routes/ping.js";
import cors from "cors"
import {ping} from "./controllers/ping.js"

const app = express();
const PORT = process.env.PORT || 5010;



var corsOptions = {
    origin: true,
    methods: ["GET","POST","DELETE"],
    allowedHeaders: '*',
    maxAge: 86400,
    preflightContinue: true
  }
app.use(cors(corsOptions))

app.use(bodyParser.json());
app.use("/ping", router);
app.get("/",cors(corsOptions), (req, res) => res.send("Welcome to the Users API!"));
app.all("*", (req, res) =>res.send("You've tried reaching a route that doesn't exist."));

app.listen(PORT, () =>console.log(`Server running on port: http://localhost:${PORT}`));


setInterval(() => {
  ping();
}, 300000);


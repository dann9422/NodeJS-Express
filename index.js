// const express = require("express");// forma vieja
import express from "express";
import router from "./routes/index.js";
const app = express();
// definir el puerto

const port = process.env.port || 4000;

// habilitar pug

app.set("view engine", "pug");

app.use("/", router);
app.listen(port, () => {
  console.log(`el servidor esta funcionando en el puerto${port}`);
});

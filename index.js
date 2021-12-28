// const express = require("express");// forma vieja
import express from "express";
import router from "./routes/index.js";
import db from './config/db.js';
const app = express();
// definir el puerto

const port = process.env.port || 4000;

// conectar la base de datos

db.authenticate()
.then(()=> console.log('base de datos conectada'))
.catch(error=> console.log(error));

// habilitar pug

app.set("view engine", "pug");
//definir la carpeta publica


//obtener el anio

app.use((req,res,next)=>{
const year= new Date();
res.locals.actualyear =year.getFullYear();
res.locals.nombresitio ='Agencia de viajes'
next();
})
app.use(express.static('Public'));

app.use("/", router);
app.listen(port, () => {
  console.log(`el servidor esta funcionando en el puerto${port}`);
});

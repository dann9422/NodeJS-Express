// const express = require("express");// forma vieja
import express from "express";
import router from "./routes/index.js";
import db from './config/db.js';
import dotenv from 'dotenv';
dotenv.config({path:"variables.env"});
const app = express();
// definir el puerto

// const port = process.env.port || 4000;

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

// instalar bodyparse para leer los datos ingresados por el usuario
app.use(express.urlencoded({extended:true}));

app.use(express.static('Public'));

app.use("/", router);

// puesto y host para la app

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;
app.listen(port,host, () => {
  console.log(' el servidor esta funcionando');
});

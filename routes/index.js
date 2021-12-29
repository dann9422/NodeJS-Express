import express from "express";
import { paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje } from "../controllers/paginasController.js";
const router = express.Router();
router.get("/inicio",paginaInicio );

router.get("/nosotros",paginaNosotros );

router.get("/viajes",paginaViajes);

router.get('/viajes/:slug',paginaDetalleViaje);

router.get("/testimoniales", paginaTestimoniales);

router.get("/contacto", );


export default router;

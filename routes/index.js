import express from "express";

const router = express.Router();
router.get("/inicio", (req, res) => {
  //req- loq ue enviamos res lo que responde
  res.render('inicio',{
    pagina: 'Inicio'
  });
});

router.get("/nosotros", (req, res) => {
  //req- loq ue enviamos res lo que responde
  res.render("nosotros",{
    pagina: 'Nosotros'
  });
});

router.get("/viajes", (req, res) => {
  //req- loq ue enviamos res lo que responde
  res.render("viajes",{
    pagina: 'Viajes'
  });
});

router.get("/testimoniales", (req, res) => {
  //req- loq ue enviamos res lo que responde
  res.render("testimoniales",{
    pagina: 'Testimoniales'
  });
});

router.get("/contacto", (req, res) => {
  //req- loq ue enviamos res lo que responde
  res.render("contacto");
});


export default router;

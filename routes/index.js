import express from "express";

const router = express.Router();
router.get("/", (req, res) => {
  //req- loq ue enviamos res lo que responde
  res.render("inicio");
});

router.get("/nosotros", (req, res) => {
  //req- loq ue enviamos res lo que responde
  res.render("nosotros");
});

export default router;

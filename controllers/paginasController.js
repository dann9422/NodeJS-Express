const paginaInicio = (req, res) => {
    //req- loq ue enviamos res lo que responde
    res.render('inicio',{
      pagina: 'Inicio'
    });
  }

  const paginaNosotros =(req, res) => {
    //req- loq ue enviamos res lo que responde
    res.render("nosotros",{
      pagina: 'Nosotros'
    });
  }

  const paginaViajes =  (req, res) => {
    //req- loq ue enviamos res lo que responde
    res.render("viajes",{
      pagina: 'Viajes'
    });
  }
  const paginaTestimoniales =(req, res) => {
    //req- loq ue enviamos res lo que responde
    res.render("testimoniales",{
      pagina: 'Testimoniales'
    });
  }

  const paginaContacto =(req, res) => {
    //req- loq ue enviamos res lo que responde
    res.render("contacto");
  }

  export {
      paginaInicio,
      paginaNosotros,
      paginaViajes,
      paginaTestimoniales,
      paginaContacto
  }
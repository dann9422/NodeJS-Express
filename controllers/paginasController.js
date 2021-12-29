
import {Viaje} from '../models/Viaje.js' ;


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

  const paginaViajes = async (req, res) => {
    // consultar base de datos
    const viajes = await Viaje.findAll();
    console.log(viajes);
  


    //req- loq ue enviamos res lo que responde
    res.render("viajes",{
      pagina: 'Próximos Viajes',
      viajes,
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

    // muestra un viaje por su slug
    const paginaDetalleViaje = async (req, res)=>{
          const {slug} = req.params;
          try {
            const viaje = await Viaje.findOne({where:{slug}});

            res.render("viaje",{
            pagina: 'Informacion viaje',
           viaje
          }
            )
          } catch (error) {
            console.log(error);
          }
             }

  export {
      paginaInicio,
      paginaNosotros,
      paginaViajes,
      paginaTestimoniales,
      paginaContacto,
      paginaDetalleViaje
  }
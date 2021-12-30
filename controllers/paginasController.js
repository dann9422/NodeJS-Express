
import {Viaje} from '../models/Viaje.js' ;
import { testimonial } from '../models/testimoniales.js';


const paginaInicio =async (req, res) => {

  //consultar 3 viajes del modelo viaje
  const promiseDb =[];

  promiseDb.push(Viaje.findAll({limit:3}));
  promiseDb.push(testimonial.findAll({limit:3}));

  try {
    const resultado = await Promise.all(promiseDb);
      //req- loq ue enviamos res lo que responde
      res.render('inicio',{
        pagina: 'Inicio',
        clase:'home',
        viajes:resultado[0],
        testimoniales:resultado[1]
      });
  } catch (error) {
    console.log(error);
  }
  
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



  const paginaTestimoniales = async(req, res) => {

    try {

      const testimoniales = await testimonial.findAll();
       //req- loq ue enviamos res lo que responde
    res.render("testimoniales",{
      pagina: 'Testimoniales',
      testimoniales
    });
    } catch (error) {
      console.log(error);
    }
   
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
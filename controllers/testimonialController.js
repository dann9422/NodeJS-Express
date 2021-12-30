
import { testimonial } from "../models/testimoniales.js";

const guardarTestimonial = async (req,res)=>{

    //validar los campos del formulario

    const {nombre,correo,mensaje} = req.body;

    const errores=[];

    if(nombre.trim() ===''){
        errores.push({mensaje:'El nombre esta vacio'});
    }

    if(correo.trim() ===''){
        errores.push({mensaje:'El Correo esta vacio'});
    }

    if(mensaje.trim() ===''){
        errores.push({mensaje:'El Mensaje esta vacio'});
    }

if(errores.length >0){

    // consultar los testimoniales existentes
    const testimoniales = await testimonial.findAll();
    //mostrar la vista con errores
    res.render('testimoniales',{
        pagina:'Testimoniales',
        errores,
        //guardar los datos del ultimo dato escrito
        nombre,
        correo,
        mensaje,
        testimoniales
    })
}else{
    //si almacenarlo en la base de datos
    try {
        await testimonial.create({
            nombre,
            correo,
            mensaje
        });
        res.redirect('/testimoniales');
    } catch (error) {
        console.log(error);
    }
}




// console.log(req.body);

}

export {guardarTestimonial}
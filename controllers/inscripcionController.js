import Inscripcion from '../models/Inscripciones.js'

//Obtienes todas las inscripciones
export const getInscripciones = async (req, res) =>{
   await Inscripcion.find().exec((err, inscripciones) =>{
       if(err) res.status(500).send({message: 'Error al obtener inscripcion'})

       if(!inscripciones) res.status(404).send({message: 'No hay inscripciones'})

       return res.status(200).send({inscripciones})
   })
}
//Obtiene una inscripcion por id
export const getInscripcion = async (req, res) =>{
    try {
        const id = req.params.id
        await Inscripcion.findById({_id: id}).then((inscripcion) =>{
            res.status(200).send({inscripcion})
        })
    } catch (error) {
        res.json({message: error.message})
    }
}
//Crea una inscripcion
export const createInscripcion = async (req, res) =>{
    try {
        const inscripcion = req.body
        await Inscripcion.create(inscripcion)
        res.status(200).send({message: 'Inscripcion creada correctamente'})
    } catch (error) {
        res.json({message: error.message})
    }
}
//Actualiza una inscripcion
export const updateInscripcion = async (req, res) =>{
   try {
    const id = req.params.id
    const updateInscripcion = req.body
    await Inscripcion.updateOne({_id:id}, updateInscripcion)
    res.status(200).send({message: 'Inscripcion actualizada correctamente'})
   } catch (error) {
       res.json({message: error.message})
   }
}
//Elimina una inscripcion
export const deleteInscripcion = async (req, res) =>{
   try {
       const id = req.params.id
       await Inscripcion.deleteOne({_id:id}).then((res) =>{
           console.log(res)
       })
       res.status(200).send({message: 'Inscripcion eliminada correcamente'})
   } catch (error) {
       res.json({message: error.message})
   }
}

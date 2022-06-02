import Instructor from '../models/Instructores.js'

//Obtiene todos los instructores
export const getIntructores = async (req, res) =>{
    await Instructor.find().exec((err, instructores) =>{
        if(err) res.status(500).send({message: 'Error al devolver instructores'})

        if(!instructores) res.status(404).send({message: 'No hay instructores'})

        return res.status(200).send({instructores})
    })
}
//Obtiene un estructor por id
export const getInstructor = async (req, res) =>{
    try {
        const id = req.params.id
        await Instructor.findById({_id: id}).then((instructor) =>{
            res.status(200).send({instructor})
        }) 
    } catch (error) {
        res.json({message: error.message})
    }
}
//Crea un nuevo instructor
export const createInstructor = async (req, res) =>{
    try {
        const instructor = req.body
        await Instructor.create(instructor)
        res.status(200).send({message:'Instructor creado correctamente'})
    } catch (error) {
        res.json({message: error.message})
    }
}
//Actualiza un instructor
export const updateInstructor = async (req, res) =>{
    try {
        const id = req.params.id
        const updateInstructor = req.body
        await Instructor.updateOne({_id:id},updateInstructor)
        res.status(200).send({message: 'Instructor actualizado correctamente'})
    } catch (error) {
        res.json({message: error.message})
    }
}
//Elimina un instructor
export const deleteInstructor = async (req, res) =>{
   try {
        const id = req.params.id
        await Instructor.deleteOne({_id:id}).then((res) =>{
            console.log(res)
        })
        res.status(200).send({message:'Instructor eliminado correctamente'})
   } catch (error) {
       res.json({message: error.message})
   }
}
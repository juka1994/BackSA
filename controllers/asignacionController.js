import Asignacion from '../models/Asignaciones.js'

//Obtienes todas las asignaciones
export const getAsignaciones = async (req, res) =>{
    await Asignacion.find().exec((err, asignaciones) =>{
        if(err) res.status(500).send({message: 'Error al devolver las asignaciones'})

        if(!asignaciones) res.status(404).send({message: 'No hay asignaciones'})

        return res.status(200).send({asignaciones})
    })
}
//Obtiene una asignacion por id
export const getAsignacion = async (req, res) =>{
    try {
        const id = req.params.id
        await Asignacion.findById({_id:id}).then((asignacion) =>{
            res.status(200).send(asignacion)
        })
    } catch (error) {
        res.json({message: error.message})
    }
}
//Crea un asignacion
export const createAsignacion = async (req, res) =>{
   try {
       const asignacion = req.body
       await Asignacion.create(asignacion)
       res.status(200).send({message: 'Asignacion creada correctamente'})
   } catch (error) {
       res.json({message: error.message})
   }
}
//Actualiza una asignacion
export const updateAsignacion = async (req, res) => {
    try {
        const id = req.params.id
        const updateAsignacion = req.body
        await Asignacion.updateOne({_id:id}, updateAsignacion)
        res.status(200).send({message: 'Asignacion actualizada correctamente'})
    } catch (error) {
        res.json({message: error.message})
    }
}
//Elimina un asignacion
export const deleteAsignacion = async (req, res) =>{
   try {
        const id = req.params.id
        await Asignacion.deleteOne({_id:id}).then((res) =>{
            console.log(res)
        })
   } catch (error) {
       res.json({message: error.message})
   }
}
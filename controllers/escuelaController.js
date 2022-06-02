import Escuela from '../models/Escuela.js'

//Obtiene la escuela por id
export const getEscuela = async (req, res) =>{
    try {
        const id = req.params.id
        await Escuela.findById({_id: id}).then((escuela) =>{
        res.status(200).send({escuela})
     })
    } catch (error) {
      res.json({message: error.message})  
    } 
}
//Crear escuela
export const createEscuela = async (req, res) =>{
    try {
        const escuela = req.body
        await Escuela.create(escuela)
        res.status(200).send({message:'Escuela creada correctamente'})
    } catch (error) {
        res.json({message: error.message})
    }
    
}
//Actualizar escuela
export const updateEscuela = async (req, res) =>{
    try {
        const id= req.params.id
        const updateEscuela = req.body
        await Escuela.updateOne({_id:id}, updateEscuela)
        res.status(200).send({message: 'Escuela actualizada correctamente'})
    } catch (error) {
        res.json({message: error.message})
    }
}
//Eliminar escuela
export const deleteEscuela = async (req, res) =>{
    try {
        const id = req.params.id
        await Escuela.deleteOne({_id:id}).then((res) =>{
            console.log(res)
        })
    } catch (error) {
        res.json({message: error.message})
    }
}
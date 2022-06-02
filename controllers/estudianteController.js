import Estudiante from '../models/Estudiantes.js'

//Obtiene todos los estudiantes
export const getEstudiantes = async (req, res)=> {
    Estudiante.find().exec((err, estudiantes) =>{
        if(err) res.status(500).send({message: 'Error al devolver estudiantes'})

        if(!estudiantes) res.status(404).send({message: 'No hay ningun estudiante'})

        return res.status(200).send({estudiantes})
    }) 
}
//Obtiene un estudiante por id
export const getEstudiante = async (req, res)=>{
     try {
        const id = req.params.id
        await Estudiante.findById({_id: id}).then((estudiante) =>{
            res.status(200).json(estudiante)
        })
     } catch (error) {
         res.json({message: error.message})
     }
}
//Crea un nuevo estudiante
export const createEstudiante = async (req, res) =>{
    try {
        const estudiante = req.body
        await Estudiante.create(estudiante)
        res.status(200).send({message: 'Estudiante creado correctamente'})
    } catch (error) {
        res.json({message: error.message})
    }
}

//Actualiza un estudiante
export const updateEstudiante = async (req, res) =>{
    try {
        const id = req.params.id
        const updateEstudiante = req.body
        await Estudiante.updateOne({_id: id}, updateEstudiante)
        res.status(200).send({message: 'Estudiante actualizado correctamente'})
    } catch (error) {
        res.json({message: error.message})
    }
    
}

//Elimina un estudiante
export const deleteEstudiante = async (req, res) =>{
    try {
        const id = req.params.id
        await Estudiante.deleteOne({_id: id}).then((res) =>{
            console.log(res)
        })
        res.status(200).send({message: 'Estudiante eliminado correctamente'})
    } catch (error) {
        res.json({message: error.message})
    }
}
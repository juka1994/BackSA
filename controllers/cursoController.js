import Cursos from '../models/Cursos.js';

//Obtiene todos los curso
export const getCursos = async (req, res) =>{
        await Cursos.find().exec((err, cursos) =>{
        if(err) return res.status(500).send({message: 'Error al devolver cursos'})

        if(!cursos) return res.status(404).send({message: 'No hay cursos'})

        return res.status(200).send({cursos})
        }) 
}

//Obtiene un curso por id
export const getCurso = async (req, res) =>{
    try {
        const id = req.params.id
        await Cursos.findById({_id: id}).then((curso) =>{
            res.status(200).json(curso)
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

//Crear un nuevo curso
export const createCurso = async (req, res) => {
    try {
        await Cursos.create(req.body)
        res.status(200).send({message: 'Curso creado correctamente'})
    } catch (error) {
        res.json({message: error.message})
    }
}

//Actualiza un curso
export const updateCurso = async (req, res) =>{
    try {
        const id = req.params.id
        const updateCurso = req.body
        await Cursos.updateOne({_id: id}, updateCurso)
        res.status(200).send({message:'Curso actualidado correctamente'})
    } catch (error) {
        res.json({message: error.message})
    }
}

//Elimina un curso 
export const deleteCurso = async (req, res) => {
    try {
        const id = req.params.id
        await Cursos.deleteOne({_id: id}).then((res) =>{
             console.log(res)
        })
        res.status(200).send({message: 'Curso eliminado correcamente'})
    } catch (error) {
        res.json({message: error.message})
    }

}
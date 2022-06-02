import Grupo from '../models/Grupos.js'

//Retorna todos los grupos
export const getGrupos = async (req, res) =>{
    await Grupo.find().exec((err, grupos) =>{
        if(err) res.status(500).send({message: 'Error al devolver grupos'})

        if(!grupos) res.status(404).send({message: 'No hay grupos'})

        res.status(200).send({grupos})
    })
} 

//Retorna un grupo por id
export const getGrupo = async (req, res) =>{
    try {
        const id = req.params.id
        await Grupo.findById({_id:id}).then((grupo) =>{
            res.status(200).send(grupo)
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

//Crear un grupo
export const createGrupo = async (req, res) =>{
    try {
        const grupo = req.body
        await Grupo.create(grupo)
        res.status(200).send({message: 'Grupo creado correctamente'})
    } catch (error) {
        res.json({message: error.message})
    }
    
}

//Actualizar un grupo
export const updateGrupo = async (req, res) =>{
    try {
        const id = req.params.id
        const updateGrupo = req.body
        await Grupo.updateOne({_id:id}, updateGrupo)
        res.status(200).send({message: 'Grupo actualizado correctamente'})
    } catch (error) {
        res.json({message: error.message})
    }
}

//Eliminar un grupo
export const deleteGrupo = async (req, res) =>{
    try {
        const id = req.params.id
        await Grupo.deleteOne({_id:id}).then((res) =>{
        console.log(res)
    })
    } catch (error) {
        res.json({message: 'Grupo eliminado correctamente'})
    }
}
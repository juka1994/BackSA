import Grado from '../models/Grado.js'

//Devuelve todos los grados
export const getGrados = async (req, res) =>{
    await Grado.find().exec((err, grados) =>{
        if(err) res.status(500).send({message: 'Error al devolver grados'})

        if(!grados) res.status(404).send({message: 'No hay grupos'})

        return res.status(200).send(grados)
    })
}

//Devuelve el grado por id
export const getGrado = async (req, res) =>{
    try {
        const id = req.params.id
        await Grado.findById({_id: id}).then((grado) =>{
            res.status(200).send(grado)
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

//Crear grado
export const createGrado = async (req, res) =>{
    try {
        const grado = req.body
        await Grado.create(grado)
        res.status(200).send({message:'Grado creado correctamente'})
    } catch (error) {
        res.json({message: error.message})
    }
}
//Actualizar grado 
export const updateGrado = async (req, res) =>{
    try {
        const id = req.params.id
        const updateGrado = req.body
        await Grado.updateOne({_id: id}, updateGrado)
        res.status(200).send({message: 'Grado actualizado correctamente'})
    } catch (error) {
        res.json({message: error.message})
    }
}
//Eliminar grado
export const deleteGrado = async (req, res) =>{
    try {
        const id = req.params.id
        await Grado.deleteOne({_id:id}).then((res) =>{
            console.log(res)
        }) 
    } catch (error) {
        res.json({message: error.message})
    }
    
}
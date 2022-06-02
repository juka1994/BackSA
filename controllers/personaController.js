import Persona from '../models/Personas.js'

//Obtienes todas las personas
export const getPersonas = async (req, res) =>{
    await Persona.find().exec((err, persona) =>{
        if(err) res.status(500).send({message:'Error al devolver persona'})
        if(!persona) res.status(404).send({message: 'No hay personas'})

        return res.status(200).send({persona})
    })
}

//Obtiene persona por id
export const getPersona = async (req, res) =>{
    try {
        const id = req.params.id
        await Persona.findById({_id: id}).then((persona) =>{
            res.status(200).json(persona)
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

//Crea una persona
export const createPersona = async (req, res) => {
    try {
        const persona = req.body
        await Persona.create(persona)
        res.status(200).send({message: 'Persona creada correctamente'})
    } catch (error) {
        res.json({message: error.message})
    }
}

//Actualiza una persona
export const updatePersona = async (req, res) =>{
    try {
        const id = req.params.id
        const updatePersona = req.body
       
        await Persona.updateOne({_id: id}, updatePersona)
        res.status(200).send({message: 'Persona actualizada correctamente'})
    } catch (error) {
        console.log(error.message)
    }
}

//Elimina una persona
export const deletePersona = async (req, res) =>{
    try {
        const id = req.params.id
        await Persona.deleteOne({_id: id}).then((res) =>{
            console.log(res)
        })
        res.status(200).send({message: 'Persona eliminada correctamente'})
    } catch (error) {
        res.json({message: error.message})
    }
}
import mongoose from 'mongoose'
mongoose.Promise = global.Promise

const personaSchema = new mongoose.Schema({
    Apellidos:{
        type: String
    },
    Nombre:{
        type: String
    },
    FechaNacimiento:{
        type: String
    },
    Email:{
        type: String
    },
    Telefono:{
        type: String
    },
    Direccion:{
        type: String
    },
    Estado:{
        type: Number
    }

})

export default mongoose.model('Persona', personaSchema)
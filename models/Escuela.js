import mongoose from 'mongoose'
mongoose.Promise = global.Promise

const escuelaSchema = new mongoose.Schema({
    Nombre:{
        type: String
    },
    Clave:{
        type: String
    },
    Director:{
        type: String
    },
    Direccion:{
        type: String
    },
    Turno:{
        type: String
    }
}, {collection: 'escuela'})

export default mongoose.model('Escuela', escuelaSchema)
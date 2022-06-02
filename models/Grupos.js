import mongoose from 'mongoose'
mongoose.Promise = global.Promise

const grupoSchema = new mongoose.Schema({
    Nombre:{
        type: String
    }
}, {collection: 'grupo'})

export default mongoose.model('Grupo', grupoSchema);
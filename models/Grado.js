import mongoose from 'mongoose'
mongoose.Promise = global.Promise

const gradoSchema = new mongoose.Schema({
    Nombre:{
        type: String
    }
},{collection:'grado'})

export default mongoose.model('Grado', gradoSchema);
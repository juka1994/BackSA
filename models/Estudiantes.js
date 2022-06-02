import mongoose from 'mongoose'
mongoose.Promise = global.Promise

const estudianteSchema = new mongoose.Schema({
    EstudianteId:{
        type: mongoose.Schema.ObjectId,
        ref: 'Persona'
    },
    Codigo:{
        type: String
    }
})

export default mongoose.model('Estudiante', estudianteSchema);
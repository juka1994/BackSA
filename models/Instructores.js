import mongoose from 'mongoose'
mongoose.Promise = global.Promise

const instructorSchema = new mongoose.Schema({
    InstructorId:{
        type: mongoose.Schema.ObjectId,
        ref: 'Persona'
    },
    Especialidad:{
        type: String
    }
},{collection: 'inscripciones'})

export default mongoose.model('Intructor', instructorSchema);
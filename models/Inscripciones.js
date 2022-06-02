import mongoose from 'mongoose'
mongoose.Promise = global.Promise

const inscripcionSchema = new mongoose.Schema({
    Grado:{
        type: String
    },
    CursoId:{
        type: mongoose.Schema.ObjectId,
        ref: 'Curso'
    },
    EstudianteId:{
        type: mongoose.Schema.ObjectId,
        ref: 'Estudiante'
    },
    Fecha:{
        type: String
    },
    Pago:{
        type: Number
    }

},  {collection: 'inscripciones'})

export default mongoose.model('Inscripcion', inscripcionSchema);
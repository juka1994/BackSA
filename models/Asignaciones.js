import mongoose from 'mongoose'
mongoose.Promise = global.Promise

const asignacionSchema = mongoose.Schema({
   CursoId:{
    type: mongoose.Schema.ObjectId,
    ref: 'Curso'
   },
   InstructorId:{
    type: mongoose.Schema.ObjectId,
    ref: 'Instructor'
   },
   Fecha:{
       type: String
   }
}, {collection: 'asignaciones'})

export default mongoose.model('Asignacion', asignacionSchema);
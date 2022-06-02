import mongoose from 'mongoose';
mongoose.Promise = global.Promise;

const cursoSchema = new mongoose.Schema({
    Nombre: {
        type: String
    },
    Descripcion:{
        type: String
    },
    Creditos:{
        type: Number
    },
    Horas:{
        type: Number
    },
    Costo:{
        type: Number
    },
    Estado:{
        type: Number
    }
})

export default mongoose.model('Curso', cursoSchema);
import mongoose from 'mongoose'


mongoose.connect('mongodb://localhost:27017/dbSistemaAcademico');
const db = mongoose.connection.on('error', (error) => {
    console.log(error);
})

export default db



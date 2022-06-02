//Requerimientos para bd
import db from './config/db.js'
import express from 'express'
import router from './routes/index.js'


const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/', router);

app.listen(5000, () =>{
    console.log('Server running hhtp://localhost:5000')
});

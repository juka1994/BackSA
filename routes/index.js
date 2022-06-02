import express from 'express'
const router = express.Router();
import { createAsignacion, deleteAsignacion, getAsignacion, getAsignaciones, updateAsignacion } from '../controllers/asignacionController.js';
import { getCursos, getCurso, createCurso, updateCurso, deleteCurso} from '../controllers/cursoController.js'   
import { createEscuela, deleteEscuela, getEscuela, updateEscuela } from '../controllers/escuelaController.js';
import { createEstudiante, deleteEstudiante, getEstudiante, getEstudiantes, updateEstudiante} from '../controllers/estudianteController.js';
import { createGrado, deleteGrado, getGrado, getGrados, updateGrado } from '../controllers/gradoController.js';
import { createGrupo, deleteGrupo, getGrupo, getGrupos, updateGrupo } from '../controllers/grupoController.js';
import { createInscripcion, deleteInscripcion, getInscripcion, getInscripciones, updateInscripcion } from '../controllers/inscripcionController.js';
import { createInstructor, deleteInstructor, getInstructor, getIntructores, updateInstructor } from '../controllers/InstructorController.js';
import { createPersona, deletePersona, getPersona, getPersonas, updatePersona } from '../controllers/personaController.js';
    
    //Escuela
    router.get('/escuela/:id', getEscuela);
    router.post('/escuela', createEscuela);
    router.put('/escuela/:id', updateEscuela);
    router.delete('/escuela/:id', deleteEscuela);
    
    //Grupo
    router.get('/grupos', getGrupos);
    router.get('/grupos/:id', getGrupo);
    router.post('/grupos', createGrupo);
    router.put('/grupos/:id', updateGrupo);
    router.delete('/grupos/:id', deleteGrupo);

    //Grado
    router.get('/grados', getGrados);
    router.get('/grados/:id', getGrado);
    router.post('/grados', createGrado);
    router.put('/grados/:id', updateGrado);
    router.delete('/grados/:id', deleteGrado);

    //Curso
    router.get('/cursos', getCursos);
    router.get('/cursos/:id', getCurso); 
    router.post('/cursos/', createCurso);
    router.put('/cursos/:id', updateCurso);
    router.delete('/cursos/:id', deleteCurso);


    //Persona
    router.get('/personas', getPersonas);
    router.get('/personas/:id', getPersona);
    router.post('/personas', createPersona);
    router.put('/personas/:id', updatePersona);
    router.delete('/personas/:id', deletePersona);

    //Estudiante
    router.get('/estudiantes', getEstudiantes);
    router.get('/estudiantes/:id', getEstudiante);
    router.post('/estudiantes', createEstudiante);
    router.put('/estudiantes/:id', updateEstudiante);
    router.delete('/estudiantes/:id', deleteEstudiante);

    //Instructor
    router.get('/instructores', getIntructores);
    router.get('/instructores/:id', getInstructor);
    router.post('/instructores', createInstructor);
    router.put('/instructores/:id', updateInstructor);
    router.delete('/instructores/:id', deleteInstructor);

    //Inscripciones
    router.get('/inscripciones', getInscripciones);
    router.get('/inscripciones/:id', getInscripcion);
    router.post('/inscripciones', createInscripcion);
    router.put('/inscripciones/:id', updateInscripcion);
    router.delete('/inscripciones/:id', deleteInscripcion);

    //Asignacion
    router.get('/asignaciones', getAsignaciones);
    router.get('/asignaciones/:id', getAsignacion);
    router.post('/asignaciones', createAsignacion);
    router.put('/asignaciones/:id', updateAsignacion);
    router.delete('/asignaciones/:id', deleteAsignacion);

export default router;

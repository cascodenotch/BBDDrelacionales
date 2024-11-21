const {pool} = require("../database")

const getMediaById = async (request, response) => {
    try {

        let param = request.params.id;
        let sql = `SELECT student_id, AVG (mark) AS nota_media 
        FROM marks
        WHERE student_id = ? `;
        let [result] = await pool.query(sql, param);
        response.send(result);
        console.log(result);
    } 
    catch (error){
        console.log(err);
        response.status(500).send("Error al obtener nota media.");
    }
}

const getApuntadaById= async (request, response) =>
{
    try {
        let param = request.params.id;
        let sql = `SELECT title
        FROM marks
        JOIN subjects ON marks.subject_id = subjects.subject_id
        WHERE student_id = ? `;
        let [result] = await pool.query(sql, param);
        response.send(result);
        console.log(result);
    }
    catch (error){
        console.log(error);
        response.status(500).send("Error al obtener asignaturas.");
    }
}

const getApuntadas = async (request, response) => {
    try {
        let param = request.params.id;
        let sql = `SELECT first_name, last_name, title
        FROM marks
        JOIN subjects ON marks.subject_id = subjects.subject_id
        JOIN students ON marks.student_id = students.student_id `;
        let [result] = await pool.query(sql, param);
        response.send(result);
        console.log(result);
    }
    catch (error){
        console.log(error);
        response.status(500).send("Error al obtener asignaturas.");
    }         
}

const getImpartidasById = async (request, response) =>
    {
        try {
            let param = request.params.id;
            let sql = `SELECT title
            FROM subjects
            JOIN subject_teacher ON subjects.subject_id = subject_teacher.subject_id
            JOIN teachers ON teachers.teacher_id = subject_teacher.teacher_id
            WHERE teachers.teacher_id = ? `;
            let [result] = await pool.query(sql, param);
            response.send(result);
            console.log(result);
        }
        catch (error){
            console.log(error);
            response.status(500).send("Error al obtener asignaturas.");
        }
    }    

const getImpartidas = async (request, response) =>
{
    try {
    
        let sql = `SELECT first_name, last_name, title
        FROM subjects
        JOIN subject_teacher ON subjects.subject_id = subject_teacher.subject_id
        JOIN teachers ON teachers.teacher_id = subject_teacher.teacher_id`;
        let [result] = await pool.query(sql);
        response.send(result);
        console.log(result);
    }
    catch (error){
        console.log(error);
        response.status(500).send("Error al obtener asignaturas.");
    }
}

module.exports = {getMediaById, getApuntadaById, getApuntadas, getImpartidasById, getImpartidas};


const {pool} = require("../database")

const getAllUsers = async (request, response) => {
    try {
        let sql = `SELECT * FROM students`;
        let [result] = await pool.query(sql);
        response.send(result);
    } 
    catch (error){
        console.log(err);
        response.status(500).send("Error al obtener listado de usuarios.");
    }
}

const getUserById= async (request, response) =>
{
    try {
        let param = request.params.id;
        let sql = `SELECT * FROM students WHERE student_id= ?`;
        let [result] = await pool.query(sql, param);
        response.send(result);
    }
    catch (error){
        console.log(error);
        response.status(500).send("Error al obtener usuario.");
    }
}

const postUser = async (request, response) => {
    try {
        
        let sql = `INSERT INTO students (first_name, last_name, grupo_id, año_ingreso) VALUES (?, ?, ?, ?)`;
        let values = [
            request.body.first_name,
            request.body.last_name,
            request.body.grupo_id,
            request.body.año_ingreso
        ];

        let [result] = await pool.query(sql, values);
        console.log(result); 

        if (result.insertId) {
            response.send(String(result.insertId));
        } else {
            response.send("-1"); 
        }
    } 
    catch (error) {
        console.log(error);
        response.status(500).send("Error al insertar usuario"); 
    }                  
}

const putUser = async (request, response) =>
    {
        try {   
            let values = [request.body.first_name, 
                        request.body.last_name, 
                        request.body.grupo_id,
                        request.body.año_ingreso,
                        request.body.student_id]
    
            let sql = `UPDATE students SET
            first_name = COALESCE(?, first_name),
            last_name = COALESCE(?, last_name),
            grupo_id = COALESCE(?, grupo_id),
            año_ingreso = COALESCE(?, año_ingreso)
            WHERE student_id = ?`;

            let [result] = await pool.query(sql, values)
            response.send(result); 
        }
        catch(error){
            console.log(error)
            response.status(500).send("Error al modificar usuario"); 
        }
    }    

const deleteUser = async (request, response) =>
{
    try {
        let value = request.body.student_id
        let sql = "DELETE FROM students WHERE student_id = ?";
        let [result] = await pool.query(sql,value);
        response.send(result); 
    }
    catch(error){
        console.log(error);
    }
}

module.exports = {getAllUsers, getUserById, postUser, putUser, deleteUser};


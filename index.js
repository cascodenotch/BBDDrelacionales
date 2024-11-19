const mysql = require("mysql2/promise");

async function run() {
  try {
    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "banana92",
      database: "dia1"
    });

    console.log("Conexion correcta");


// AÑADIR COLUMNA 

    // let [result1] = await connection.query("ALTER TABLE direcciones ADD COLUMN codigo_postal VARCHAR(10)");
    // console.log(result1);
    // let [tabla1] = await connection.query("SELECT * FROM direcciones");
    // console.log(tabla1);

// BORRAR COLUMNA

    // let [result2] = await connection.query("ALTER TABLE direcciones DROP COLUMN codigo_postal");
    // console.log(result2);
    // let [tabla2] = await connection.query("SELECT * FROM direcciones");
    // console.log(tabla2);

// ELIMINAR TABLA

    // let [result3] = await connection.query("DROP TABLE direcciones");
    // console.log(result3);
    // let [tablas] = await connection.query("SHOW TABLES");
    // console.log(tablas);

// MODIFICAR DATOS DE UNA COLUMNA 

    // let [result4] = await connection.query("UPDATE marks SET mark=5");
    // console.log(result4);
    // let [tabla4] = await connection.query("SELECT * FROM marks");
    // console.log(tabla4);


// OBTENER DATOS 

    // let [result5]= await connection.query("SELECT first_name, last_name FROM students")
    // console.log(result5);


// OBTENER TODOS LOS DATOS DE UNA TABLA

    let[result6] = await connection.query("SELECT * FROM teachers");
    console.log(result6);

    await connection.end();
  } catch (error) {
    console.error(error);
  }
}

run();
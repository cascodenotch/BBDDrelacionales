const mysql = require("mysql2/promise");

async function run() {
  try {
    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "banana92",
      database: "dia2"
    });

    console.log("Conexion correcta");

    let idDueño = 1;
    let sql1 = `
      SELECT piezas.nombre AS nombre_pieza, 
      lugares.tipo AS localizacion, 
      prestamos.fecha_expiracion AS expiracion_prestamo, 
      dueños.nombre AS dueño,
      dueños.email AS email_dueño, 
      dueños.telefono AS telefono_dueño
      FROM prestamos
      JOIN piezas ON prestamos.id_pieza = piezas.id_pieza
      JOIN dueños ON piezas.id_dueño = dueños.id_dueño
      JOIN lugares ON piezas.id_lugar = lugares.id_lugar
      WHERE dueños.id_dueño = ?;`;
    let [result1] = await connection.query(sql1, idDueño);
    console.log(result1);

    let tipoColeccion = 'permanente'
    let sql2 = `
    SELECT colecciones.tipo,
    COUNT(*) AS num_piezas
    FROM piezas
    JOIN colecciones ON piezas.id_coleccion = colecciones.id_coleccion
    WHERE colecciones.tipo = ?
    GROUP BY colecciones.tipo
    ORDER BY num_piezas DESC`;
    let [result2] = await connection.query(sql2, tipoColeccion)
    console.log (result2);

    await connection.end();
  } catch (error) {
    console.error(error);
  }
}

run();
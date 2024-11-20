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

    // let [result1] = await connection.query(
    //     `SELECT student_id, subject_id, AVG(mark) AS nota_media 
    //      FROM marks 
    //      WHERE subject_id = 1 
    //      GROUP BY student_id`
    //   );
    //   console.log(result1);

    // let [result2] = await connection.query(
    //     `SELECT COUNT(*) FROM students`
    //   );
    //   console.log(result2);

    // let [result3] = await connection.query(
    //     `SELECT * FROM grupos`
    //   );
    //   console.log(result3);

    // let [result4] = await connection.query(
    //     `UPDATE marks SET mark = null 
    //     WHERE mark > 5 AND YEAR(date) = 2023;`
    //   );
    //   console.log(result4);

    // let [result5] = await connection.query(
    //     `SELECT COUNT(*) AS alumnos_2024 
    //     FROM students 
    //     WHERE YEAR(año_ingreso) = 2024;`
    //   );
    //   console.log(result5);

      // let [result6] = await connection.query(
      //   `SELECT subject_id, COUNT(*) AS num_profesores
      //   FROM subject_teacher
      //   GROUP BY subject_id;`
      // );
      // console.log(result6);

      // let [result7] = await connection.query(
      //   `SELECT student_id, mark 
      //   FROM marks
      //   WHERE (student_id BETWEEN 1 AND 20) OR (mark >8 AND YEAR(date)=2023)`
      // );
      // console.log(result7);

      // let [result8] = await connection.query(
      //   `SELECT subject_id, AVG (mark) AS media_asignatura
      //     FROM marks
      //     WHERE YEAR(date)=2023
      //     GROUP BY subject_id`
      // );
      // console.log(result8);

      // let [result9] = await connection.query(
      //   `SELECT student_id, AVG (mark) AS media_asignatura
      //   FROM marks
      //   WHERE YEAR(date)=2023
      //   GROUP BY student_id`
      // );
      // console.log(result9);

      // let [result10] = await connection.query(
      //   `SELECT students.first_name, students.last_name, subjects.title FROM students
      //   JOIN grupos ON students.grupo_id = grupos.grupo_id
      //   JOIN subject_teacher ON grupos.grupo_id = subject_teacher.grupo_id
      //   JOIN subjects ON subject_teacher.subject_id = subjects.subject_id;`
      // );
      // console.log(result10);

      // let [result11] = await connection.query(
      //   `SELECT teachers.first_name, teachers.last_name, subjects.title FROM teachers
      //     JOIN subject_teacher ON teachers.teacher_id = subject_teacher.teacher_id
      //     JOIN subjects ON subject_teacher.subject_id = subjects.subject_id`
      // );
      // console.log(result11);

      let [result12] = await connection.query(
        `SELECT subjects.title, teachers.first_name, teachers.last_name, COUNT(*)AS num_alumnos_asignatura
          FROM students
          JOIN marks ON students.student_id = marks.student_id
          JOIN subjects ON marks.subject_id = subjects.subject_id
          JOIN subject_teacher ON subjects.subject_id = subject_teacher.subject_id
          JOIN teachers ON subject_teacher.teacher_id = teachers.teacher_id
          GROUP BY subjects.title, teachers.first_name, teachers.last_name`
      );
      console.log(result12);

    await connection.end();
  } catch (error) {
    console.error(error);
  }
}

run();
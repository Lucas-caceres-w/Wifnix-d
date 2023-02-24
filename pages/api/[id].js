import { pool } from "../../database/pool";

export default async function handler(req, res) {
  // Obtener el parámetro de la ruta `id`
  const { id } = req.query;

  // Realizar una consulta para obtener el producto con el ID especificado
  const [result] = await pool.query(
    "SELECT * FROM products WHERE id = ?",
    [id],
    (error, results) => {
      if (error) throw error;
      return results;
    }
  );
  //console.log(result[0]);
  return res.status(200).json(result[0]);
}

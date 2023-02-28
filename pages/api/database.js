import { pool } from "../../database/pool";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET": {
      return await GetProducts(req, res);
    }
    case "POST": {
      return await AddProduct(req, res);
    }
    case "DELETE": {
      return await DeleteProduct(req, res);
    }
    case "PATCH": {
      return await UpdateProduct(req, res);
    }
  }
}

const AddProduct = async (req, res) => {
  const { product, details, price, quantity, category, images } = req.body;
  const imgJson = JSON.stringify(images);
  try {
    const result = await pool.query("INSERT INTO products SET ?", {
      product,
      details,
      price,
      quantity,
      category,
      images: imgJson,
    });
    return res.status(200).json(result);
  } catch (error) {
    //console.error(error);
    return res.status(500).json({ message: "Error al insertar el producto" });
  }
};

const GetProducts = async (req, res) => {
  const [result] = await pool.query("SELECT * FROM products");
  //console.log(result);
  return res.status(200).json(result);
};

const UpdateProduct = async (req, res) => {
  const { id, update } = req.body;
  let { product, details, price, quantity, category, images } = update;
  //console.log(update);
  const imgJson = JSON.stringify(images);
  try {
    const [result] = await pool.query("UPDATE products SET ? WHERE id = ?", [
      {
        product,
        details,
        price,
        quantity,
        category,
        images: imgJson,
      },
      id,
    ]);
    return res.status(200).json("Producto actualizado");
  } catch (err) {
    /* 
    console.log(err); */
  }
};

const DeleteProduct = async (req, res) => {
  const id = req.body;
  const [result] = await pool.query("DELETE FROM products WHERE id = ?", [id]);
  return res.status(200).json("Producto eliminado");
};

import { pool } from "../../database/pool";
import { verify } from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method === "POST") {
    return await GetUsers(req, res);
  }
  if (req.method === "GET") {
    return await ValidateUser(req, res);
  }
}

const GetUsers = async (req, res) => {
  try {
    const { user } = req.body;
    //console.log(user);
    const [result] = await pool.query(
      "SELECT * FROM users WHERE (username = ? OR email = ?) AND (rol = 'admin' OR rol = 'user')",
      [user, user]
    );
    if (result.length > 0) {
      const dataUser = {
        user: result[0].username,
        email: result[0].email,
      };
      return res.status(200).json(dataUser);
    } else {
      return res.status(403).json("no autorizado");
    }
  } catch (error) {
    //console.error(error);
    return res.status(500).json("error interno del servidor");
  }
};

const ValidateUser = async (req, res) => {
  const { tokenUser } = req.cookies;
  if (!tokenUser) {
    return res.status(401).json({ error: "no token" });
  }
  try {
    const user = verify(tokenUser, "secret");
    //console.log(user);
    return res.status(200).json(user);
  } catch (err) {
    return res.status(401)/* .json("Invalid token") */;
  }
};

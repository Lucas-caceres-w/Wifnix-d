import { serialize } from "cookie";
import { pool } from "../../database/pool";
import jwt, { verify } from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method === "POST") {
    return await ValidatePass(req, res);
  }
}

const ValidatePass = async (req, res) => {
  try {
    const { pass } = req.body;
    const [result] = await pool.query("SELECT * FROM users WHERE pass = ?", [
      pass,
    ]);
    if (result.length > 0) {
      const token = jwt.sign(
        {
          exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
          user: result[0].username,
          email: result[0].email,
          rol: result[0].rol,
        },
        "secret"
      );
      const serialized = serialize("tokenUser", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 1000 + 60 * 60 * 24 * 30,
        path: "/",
      });
      const user = verify(token, "secret");
      res.setHeader("Set-Cookie", serialized);
      return res.status(200).json(user);
    } else {
      return res.status(403).json("no autorizado");
    }
  } catch (err) {
    console.log(err);
    return res.status(404).json("Error de autenticacion");
  }
};

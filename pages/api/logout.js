import { verify } from "jsonwebtoken";
import cookie, { serialize } from "cookie";

export default async function handler(req, res) {
  if (req.method === "POST") {
    return await LogoutUser(req, res);
  }
}

const LogoutUser = async (req, res) => {
  const { tokenUser } = req.cookies;
  if (!tokenUser) {
    return res.status(401).json({ error: "no token" });
  }
  try {
    verify(tokenUser, "secret");
    const serialized = serialize("tokenUser", null, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 0,
      path: "/",
    });
    res.setHeader("Set-Cookie", serialized);
    return res.status(200).json("Logout sucessful");
  } catch (err) {
    return res.status(401).json({ error: "invalid token" });
  }
};

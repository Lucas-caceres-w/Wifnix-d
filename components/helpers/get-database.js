import axios from "axios";

//Funcion que llama la base de datos y obtiene los productos, se exporta y utiliza donde haga falta.
export const Productos = async () => {
  const res = await axios.get("/api/database");
  const json = await res.data;
  return json;
};
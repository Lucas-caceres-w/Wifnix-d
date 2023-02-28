import { PublishOutlined } from "@mui/icons-material";
import {
  Alert,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  TextField,
} from "@mui/material";
import Inventario from "./inventario";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Productos } from "../helpers/get-database";

function Form() {
  let form = useRef();

  const InicialState = {
    product: "",
    details: "",
    price: "",
    quantity: "",
    category: "",
    images: [],
  };

  const [put, setPut] = useState(false);
  const [updateError, setUpdateError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [del, setDel] = useState(false);
  const [error, setError] = useState(false);
  const [dataBase, setDataBase] = useState();
  const [select, setSelect] = useState("");
  const [update, setUpdate] = useState(InicialState);
  const [product, setProduct] = useState(InicialState);

  const FilesUp = (e) => {
    const imagesArray = [];
    Array.from(e).forEach((e) => {
      const reader = new FileReader();
      reader.readAsDataURL(e);
      reader.onload = function () {
        const base64 = reader.result;
        imagesArray.push(base64);
        setProduct((prevProduct) => ({
          ...prevProduct,
          images: imagesArray,
        }));
        setUpdate((prevUpdate) => ({
          ...prevUpdate,
          images: imagesArray,
        }));
      };
    });
  };

  const ShowProducts = async () => {
    try {
      const json = await Productos();
      setDataBase(json);
    } catch (err) {
      console.log(err);
    }
  };

  const HandleChange = ({ target: { name, value } }) => {
    setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
    setUpdate((prevUpdate) => ({ ...prevUpdate, [name]: value }));
  };

  //Esta funcion sirve para agregar la categoria al producto sin afectar el estado anterior o siguiente
  const setValue = (e) => {
    setSelect(e.target.value);
    setProduct((prevProduct) => ({ ...prevProduct, category: e.target.value }));
    setUpdate((prevUpdate) => ({ ...prevUpdate, category: e.target.value }));
  };

  const UploadProduct = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/database", product);
      console.log(res);
      if (res.status === 200) {
        ShowProducts();
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 3000);
        clearTimeout();
        setProduct(InicialState);
        setSelect("");
      } else {
        throw err;
      }
    } catch (err) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
      clearTimeout();
    }
  };

  const DeleteProduct = async (id) => {
    try {
      const res = await axios.delete("/api/database", {
        data: id,
      });
      if (res.status === 200) {
        setDel(true);
        setTimeout(() => {
          setDel(false);
        }, 3000);
        clearTimeout();
        setDataBase(dataBase.filter((product) => product.id !== id));
      } else {
        throw err;
      }
    } catch (err) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
      clearTimeout();
    }
  };

  const UpdateProduct = async (id) => {
    try {
      if (
        update.product.trim() === "" ||
        update.details.trim() === "" ||
        update.price.trim() === 0 ||
        update.quantity.trim() === 0 ||
        update.category.trim() === ""
      ) {
        setUpdateError(true);
        setTimeout(() => {
          setUpdateError(false);
        }, 2000);
        clearTimeout();
      } else {
        const res = await axios.patch("/api/database", { update, id });
        if (res.status === 200) {
          setPut(true);
          setTimeout(() => {
            setPut(false);
          }, 2000);
          clearTimeout();
          ShowProducts();
          setProduct(InicialState);
          setSelect("");
        } else {
          throw err;
        }
      }
    } catch (err) {
      setError(true);
      console.log(err);
      setTimeout(() => {
        setError(false);
      }, 2000);
      clearTimeout();
    }
  };

  useEffect(() => {
    ShowProducts();
  }, []);

  return (
    <section className="flex flex-col xl:flex-row gap-4 items-start w-11/12 m-auto">
      {put === true && (
        <Snackbar
          open={put === true}
          onClose={put === false}
          autoHideDuration={2000}
        >
          <Alert className="bg-green-500 text-white" severity="success">
            Producto correctamente actualizado !
          </Alert>
        </Snackbar>
      )}
      {del === true && (
        <Snackbar
          open={del === true}
          onClose={del === false}
          autoHideDuration={2000}
        >
          <Alert className="bg-green-500 text-white" severity="success">
            Producto eliminado con exito !
          </Alert>
        </Snackbar>
      )}
      {success === true && (
        <Snackbar
          open={success === true}
          onClose={success === false}
          autoHideDuration={2000}
        >
          <Alert className="bg-green-500 text-white" severity="success">
            Producto Agregado con exito !
          </Alert>
        </Snackbar>
      )}
      {error === true && (
        <Snackbar
          open={error === true}
          onClose={error === false}
          autoHideDuration={2000}
        >
          <Alert className="bg-red-500 text-white" severity="error">
            Ocurrio un error !
          </Alert>
        </Snackbar>
      )}
      <div className="w-full xl:w-1/4 relative">
        <form
          className="w-full flex flex-col p-4 bg-gray-200 rounded shadow-md shadow-slate-500"
          ref={form}
          onSubmit={UploadProduct}
        >
          <p className="text-slate-800 font-semibold text-xl">Add product:</p>
          <div className="m-auto flex flex-row xl:flex-col items-start flex-wrap justify-around gap-y-5">
            <div className="text-left">
              <TextField
                multiline
                required={true}
                onChange={HandleChange}
                label="Product:"
                name="product"
                type={"text"}
                variant="standard"
                value={product.product}
              />
            </div>
            <div className="mt-2 relative">
              <TextField
                multiline
                required={true}
                onChange={HandleChange}
                label="Details:"
                name="details"
                type={"text"}
                variant="standard"
                value={product.details}
              />
              <p className="absolute -bottom-5 text-xs font-base">
                (Separar con ( , ) cada detalle)
              </p>
            </div>
            <div className="">
              <TextField
                required={true}
                onChange={HandleChange}
                label="Price:"
                name="price"
                type="number"
                variant="standard"
                value={product.price}
              />
            </div>
            <div className="">
              <TextField
                required={true}
                onChange={HandleChange}
                label="Quantity:"
                name="quantity"
                type="number"
                variant="standard"
                value={product.quantity}
              />
            </div>
            <div className="w-full">
              <input
                className="w-full"
                name="images"
                onChange={(e) => FilesUp(e.target.files)}
                type={"file"}
                multiple
              />
            </div>
            <FormControl sx={{ m: 1, minWidth: 80 }}>
              <InputLabel id="select">Category</InputLabel>
              <Select
                className="w-44 text-slate-900"
                labelId="select"
                id="select"
                name="category"
                value={select}
                label="Category"
                onChange={setValue}
              >
                <MenuItem value="Camera">Camera</MenuItem>
                <MenuItem value="Security Kit">Security Kit</MenuItem>
                <MenuItem value="Connectors">Connectors</MenuItem>
                <MenuItem value="Recorders">Recorders</MenuItem>
              </Select>
            </FormControl>
            <div className="relative m-auto">
              <Button
                type="submit"
                className="bg-green-700 mt-5 mb-2"
                variant="contained"
                color="success"
                startIcon={<PublishOutlined />}
              >
                Enviar
              </Button>
            </div>
          </div>
        </form>
        {updateError === true && (
          <Alert
            severity="error"
            className="absolute bg-red-500 text-white top-2 left-1/4"
          >
            Los campos estan vacios, debe llenarlos antes de actualizar un
            producto !
          </Alert>
        )}
      </div>
      <article className="scrollbar w-full xl:w-3/4 h-96 overflow-y-scroll bg-gray-200 rounded shadow-md shadow-slate-500">
        <table className="rounded w-full table table-auto lg:table-fixed border-collapse border border-slate-500">
          <thead className="w-full bg-slate-400">
            <tr className="">
              <th className="border border-slate-500 p-2 w-full text-left text-lg font-bold text-slate-900">
                Producto:
              </th>
              <th className="border border-slate-500 p-2 w-full text-left text-lg font-bold text-slate-900">
                ID:
              </th>
              <th className="border border-slate-500 p-2 w-full text-left text-lg font-bold text-slate-900">
                Precios:
              </th>
              <th className="border border-slate-500 p-2 w-full text-left text-lg font-bold text-slate-900">
                Stock:
              </th>
              <th className="border border-slate-500 p-2 w-full text-left text-lg font-bold text-slate-900">
                Detalles:
              </th>
              <th className="border border-slate-500 p-2 w-full text-left text-lg font-bold text-slate-900">
                Categoria:
              </th>
              <th className="border border-slate-500 p-2 w-full text-left text-lg font-bold text-slate-900">
                Archivos:
              </th>
              <th className="w-full text-left text-lg font-bold text-slate-900">
                &nbsp;
              </th>
            </tr>
          </thead>
          <Inventario
            UpdateProduct={UpdateProduct}
            DeleteProduct={DeleteProduct}
            dataBase={dataBase}
          />
        </table>
      </article>
    </section>
  );
}

export default Form;

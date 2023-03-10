import { PublishOutlined } from "@mui/icons-material";
import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
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
  const [ID, setID] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [dataBase, setDataBase] = useState();
  const [select, setSelect] = useState("");
  const [update, setUpdate] = useState(InicialState);
  const [product, setProduct] = useState(InicialState);
  const [file, setFile] = useState([]);

  const handleClickOpen = (id) => {
    setOpenDialog(true);
    setID(id);
  };

  const handleClose = () => {
    setOpenDialog(false);
    setID(null);
  };

  const handleDelete = async (id) => {
    handleClose();
    await DeleteProduct(id);
  };

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

    const filenames = Array.from(e).map((file) => file.name);
    console.log(filenames);
    setFile(filenames);
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

      <Dialog
        open={openDialog}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Esta seguro de eliminar el producto?
        </DialogTitle>
        <DialogActions>
          <Button onClick={() => handleDelete(ID)}>Aceptar</Button>
          <Button onClick={handleClose}>Cancelar</Button>
        </DialogActions>
      </Dialog>

      <div className="w-full xl:w-1/4 relative">
        <form
          className="w-full flex flex-col p-4 bg-gray-100 rounded-xl shadow-md shadow-slate-500"
          ref={form}
          onSubmit={UploadProduct}
        >
          <p className="color-blue text-center py-6 font-bold text-xl">
            Add product:
          </p>
          <div className="w-10/12 m-auto flex flex-row xl:flex-col items-center flex-wrap justify-around gap-y-5">
            <div className="text-left w-full">
              <TextField
                className="w-full"
                multiline
                required={true}
                onChange={HandleChange}
                label="Product:"
                name="product"
                type={"text"}
                variant="outlined"
                value={product.product}
              />
            </div>
            <div className="relative w-full">
              <TextField
                className="w-full"
                multiline
                required={true}
                onChange={HandleChange}
                label="Details:"
                name="details"
                type={"text"}
                variant="outlined"
                value={product.details}
              />
              <p className="absolute -bottom-5 text-xs font-base">
                (Separar con ( , ) cada detalle)
              </p>
            </div>
            <div className="w-full">
              <TextField
                className="w-full"
                required={true}
                onChange={HandleChange}
                label="Price:"
                name="price"
                type="number"
                variant="outlined"
                value={product.price}
              />
            </div>
            <div className="w-full">
              <TextField
                className="w-full"
                required={true}
                onChange={HandleChange}
                label="Quantity:"
                name="quantity"
                type="number"
                variant="outlined"
                value={product.quantity}
              />
            </div>
            <FormControl className="w-full" sx={{ m: 1, minWidth: 80 }}>
              <InputLabel id="select">Category</InputLabel>
              <Select
                className="w-full text-slate-900"
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
            <div className="container-input flex flex-row items-center cursor-pointer">
              <label className="bg-sky-500 cursor-pointer text-xs w-2/4" htmlFor="images">
                Select files
              </label>
              <input
                id="file"
                name="images"
                onChange={(e) => FilesUp(e.target.files)}
                type={"file"}
                multiple
              />
              <span className="w-2/4">
                {file.length <= 0
                  ? "No hay archivos"
                  : file.length === 1
                  ? file[0]
                  : `Hay ${file.length} archivos`}
              </span>
            </div>
            <button
              type="submit"
              className="bg-sky-500 rounded-full text-white p-2 px-4 hover:bg-sky-600 mt-5 mb-2"
            >
              Enviar
            </button>
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
      <article className="rounded-2xl scrollbar w-full xl:w-3/4 h-[550px] overflow-y-scroll bg-gray-100 shadow-md shadow-slate-500">
        <table className="rounded-full w-full table table-auto lg:table-fixed border-collapse">
          <thead className="w-full rounded-t-full h-16 sticky top-0 z-10 p-4 bg-sky-500">
            <tr className="text-white text-center text-md font-semibold">
              <th className="p-2 w-full">Producto:</th>
              <th className="p-2 w-full">ID:</th>
              <th className="p-2 w-full">Precios:</th>
              <th className="p-2 w-full">Stock:</th>
              <th className="p-2 w-full">Detalles:</th>
              <th className="p-2 w-full">Categoria:</th>
              <th className="p-2 w-full">Archivos:</th>
              <th className="w-full">&nbsp;</th>
            </tr>
          </thead>
          <Inventario
            UpdateProduct={UpdateProduct}
            ConfirmDelete={handleClickOpen}
            dataBase={dataBase}
          />
        </table>
      </article>
    </section>
  );
}

export default Form;

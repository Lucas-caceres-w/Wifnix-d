import { Skeleton, Button, TextField } from "@mui/material";
import { Delete, Edit, FileUpload } from "@mui/icons-material";

function Inventario(props) {
  return props.dataBase ? (
    <tbody className="w-full bg-gray-200">
      {props.dataBase?.map((e) => {
        let detalles = e.details.split(",").map((e, index) => {
          return (
            <li key={index} className="text-md font-medium list-disc">
              {e.trim()}
            </li>
          );
        });
        return (
          <tr
            key={e.id}
            className="border border-slate-400 text-left w-full text-slate-800 font-semibold text-xs"
          >
            <td className="border border-slate-400 rounded p-2 text-left w-full text-slate-800 font-semibold text-xs">
              {e.product}
            </td>
            <td className="border border-slate-400 p-2 text-left w-full text-slate-800 font-semibold text-xs">
              {e.id}
            </td>
            <td className="border border-slate-400 p-2 text-left w-full text-slate-800 font-semibold text-xs">
              {e.price} $
            </td>
            <td className="border border-slate-400 p-2 text-left w-full text-slate-800 font-semibold text-xs">
              {e.quantity}
            </td>
            <td className="border border-slate-400 text-left w-full text-slate-800 font-semibold text-xs">
              <ul className="pl-5">{detalles}</ul>
            </td>
            <td className="border border-slate-400 p-2 text-left w-full text-slate-800 font-semibold text-xs">
              {e.category}
            </td>
            <td className="border border-slate-400 p-2 text-left w-full text-slate-800 font-semibold text-xs">
              {e.images && <p>Hay {e.images.length} imagenes</p>}
            </td>
            <td className="flex flex-col gap-1">
              <Button
                className="bg-blue-500"
                startIcon={<Edit />}
                onClick={() => props.UpdateProduct(e.id)}
                variant="contained"
              >
                Editar
              </Button>
              <Button
                className="bg-red-500"
                startIcon={<Delete />}
                variant="contained"
                color="error"
                onClick={() => props.DeleteProduct(e.id)}
              >
                Eliminar
              </Button>
            </td>
          </tr>
        );
      })}
    </tbody>
  ) : (
    <tbody className="w-full h-full bg-gray-200">
      <tr className="flex flex-row gap-2 w-full h-full justify-between">
        <td>
          <Skeleton width={"150px"} height={"20px"} />
        </td>
        <td>
          <Skeleton width={"150px"} height={"20px"} />
        </td>
        <td>
          <Skeleton width={"150px"} height={"20px"} />
        </td>
        <td>
          <Skeleton width={"150px"} height={"20px"} />
        </td>
        <td>
          <Skeleton width={"150px"} height={"20px"} />
        </td>
        <td>
          <Skeleton width={"50px"} height={"15px"} />
          <Skeleton width={"50px"} height={"15px"} />
        </td>
      </tr>
      <tr className="flex flex-row gap-2 w-full h-full justify-between">
        <td>
          <Skeleton width={"150px"} height={"20px"} />
        </td>
        <td>
          <Skeleton width={"150px"} height={"20px"} />
        </td>
        <td>
          <Skeleton width={"150px"} height={"20px"} />
        </td>
        <td>
          <Skeleton width={"150px"} height={"20px"} />
        </td>
        <td>
          <Skeleton width={"150px"} height={"20px"} />
        </td>
        <td>
          <Skeleton width={"50px"} height={"15px"} />
          <Skeleton width={"50px"} height={"15px"} />
        </td>
      </tr>
      <tr className="flex flex-row gap-2 w-full h-full justify-between">
        <td>
          <Skeleton width={"150px"} height={"20px"} />
        </td>
        <td>
          <Skeleton width={"150px"} height={"20px"} />
        </td>
        <td>
          <Skeleton width={"150px"} height={"20px"} />
        </td>
        <td>
          <Skeleton width={"150px"} height={"20px"} />
        </td>
        <td>
          <Skeleton width={"150px"} height={"20px"} />
        </td>
        <td>
          <Skeleton width={"50px"} height={"15px"} />
          <Skeleton width={"50px"} height={"15px"} />
        </td>
      </tr>
      <tr className="flex flex-row gap-2 w-full h-full justify-between">
        <td>
          <Skeleton width={"150px"} height={"20px"} />
        </td>
        <td>
          <Skeleton width={"150px"} height={"20px"} />
        </td>
        <td>
          <Skeleton width={"150px"} height={"20px"} />
        </td>
        <td>
          <Skeleton width={"150px"} height={"20px"} />
        </td>
        <td>
          <Skeleton width={"150px"} height={"20px"} />
        </td>
        <td>
          <Skeleton width={"50px"} height={"15px"} />
          <Skeleton width={"50px"} height={"15px"} />
        </td>
      </tr>
      <tr className="flex flex-row gap-2 w-full h-full justify-between">
        <td>
          <Skeleton width={"150px"} height={"20px"} />
        </td>
        <td>
          <Skeleton width={"150px"} height={"20px"} />
        </td>
        <td>
          <Skeleton width={"150px"} height={"20px"} />
        </td>
        <td>
          <Skeleton width={"150px"} height={"20px"} />
        </td>
        <td>
          <Skeleton width={"150px"} height={"20px"} />
        </td>
        <td>
          <Skeleton width={"50px"} height={"15px"} />
          <Skeleton width={"50px"} height={"15px"} />
        </td>
      </tr>
      <tr className="flex flex-row gap-2 w-full h-full justify-between">
        <td>
          <Skeleton width={"150px"} height={"20px"} />
        </td>
        <td>
          <Skeleton width={"150px"} height={"20px"} />
        </td>
        <td>
          <Skeleton width={"150px"} height={"20px"} />
        </td>
        <td>
          <Skeleton width={"150px"} height={"20px"} />
        </td>
        <td>
          <Skeleton width={"150px"} height={"20px"} />
        </td>
        <td>
          <Skeleton width={"50px"} height={"15px"} />
          <Skeleton width={"50px"} height={"15px"} />
        </td>
      </tr>
      <tr className="flex flex-row gap-2 w-full h-full justify-between">
        <td>
          <Skeleton width={"150px"} height={"20px"} />
        </td>
        <td>
          <Skeleton width={"150px"} height={"20px"} />
        </td>
        <td>
          <Skeleton width={"150px"} height={"20px"} />
        </td>
        <td>
          <Skeleton width={"150px"} height={"20px"} />
        </td>
        <td>
          <Skeleton width={"150px"} height={"20px"} />
        </td>
        <td>
          <Skeleton width={"50px"} height={"15px"} />
          <Skeleton width={"50px"} height={"15px"} />
        </td>
      </tr>
      <tr className="flex flex-row gap-2 w-full h-full justify-between">
        <td>
          <Skeleton width={"150px"} height={"20px"} />
        </td>
        <td>
          <Skeleton width={"150px"} height={"20px"} />
        </td>
        <td>
          <Skeleton width={"150px"} height={"20px"} />
        </td>
        <td>
          <Skeleton width={"150px"} height={"20px"} />
        </td>
        <td>
          <Skeleton width={"150px"} height={"20px"} />
        </td>
        <td>
          <Skeleton width={"50px"} height={"15px"} />
          <Skeleton width={"50px"} height={"15px"} />
        </td>
      </tr>
    </tbody>
  );
}

export default Inventario;

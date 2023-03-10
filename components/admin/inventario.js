import { Delete, Edit } from "@mui/icons-material";
import SkeletonAdmin from "./skeleton";

function Inventario(props) {
  return props.dataBase ? (
    <tbody className="w-full h-full overflowy-auto bg-gray-100">
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
            className="border border-gray-300 text-center w-full text-slate-800 font-semibold text-xs"
          >
            <td className="border border-gray-300 rounded p-2 text-left w-full text-slate-800 font-semibold text-xs">
              {e.product}
            </td>
            <td className="border border-gray-300 p-2 text-center w-full text-slate-800 font-semibold text-xs">
              {e.id}
            </td>
            <td className="border border-gray-300 p-2 text-center w-full text-slate-800 font-semibold text-xs">
              {e.price} $
            </td>
            <td className="border border-gray-300 p-2 text-center w-full text-slate-800 font-semibold text-xs">
              {e.quantity}
            </td>
            <td className="border border-gray-300 text-left w-full text-slate-800 font-semibold text-xs">
              <ul className="pl-5">{detalles}</ul>
            </td>
            <td className="border border-gray-300 p-2 text-center w-full text-slate-800 font-semibold text-xs">
              {e.category}
            </td>
            <td className="border border-gray-300 p-2 text-center w-full text-slate-800 font-semibold text-xs">
              {e.images && <p>Hay {e.images.length} imagenes</p>}
            </td>
            <td className="flex flex-col gap-1 p-2">
              <button
                className="bg-sky-500 hover:bg-sky-600 rounded-full text-white px-4 py-2 flex flex-row justify-center items-center"
                onClick={() => props.UpdateProduct(e.id)}
              >
                <Edit />
                Editar
              </button>
              <button
                className="bg-red-600 hover:bg-red-700 rounded-full text-white px-4 py-2 flex flex-row justify-center items-center"
                onClick={() => props.ConfirmDelete(e.id)}
              >
                <Delete />
                Eliminar
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  ) : (
    <tbody className="w-full h-full bg-gray-100">
      <SkeletonAdmin />
      <SkeletonAdmin />
      <SkeletonAdmin />
      <SkeletonAdmin />
      <SkeletonAdmin />
      <SkeletonAdmin />
      <SkeletonAdmin />
      <SkeletonAdmin />
      <SkeletonAdmin />
      <SkeletonAdmin />
      <SkeletonAdmin />
      <SkeletonAdmin />
      <SkeletonAdmin />
      <SkeletonAdmin />
      <SkeletonAdmin />
    </tbody>
  );
}

export default Inventario;

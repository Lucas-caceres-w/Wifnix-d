import { Print } from "@mui/icons-material";
import ListOption from "./list-option";

function BuyOptions() {
  return (
    <div className="w-6/12 m-auto mt-12">
      <ul>
        <ListOption option="Cobrar vale de Wifnix" />
        <ListOption option="Añadir numero de articulo" />
        <ListOption icon={<Print />} option="Añadir numero de articulo" />
      </ul>
    </div>
  );
}

export default BuyOptions;

import { Add } from "@mui/icons-material";

function ListOption(props) {
  return (
    <li className="flex flex-row gap-5 text-lg font-medium border-y-2 border-gray-300 py-4">
      {props.icon ? props.icon : <Add />} {props.option}
    </li>
  );
}

export default ListOption;

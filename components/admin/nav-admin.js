import { Home, Inventory2, LocalShipping, Logout } from "@mui/icons-material";
import { IconButton, Tooltip, Zoom } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";

function NavAdmin() {
  const router = useRouter();
  const Exit = async () => {
    try {
      const res = await axios.post("/api/logout");
      router.push("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-16 h-vh bg-neutral-600 relative">
      <div className="flex flex-col items-center justify-around gap-4 mt-3">
        <Tooltip TransitionComponent={Zoom} title="Home" placement="right">
          <IconButton aria-label="Home">
            <Link href={"/"}>
              <Home className="text-zinc-200 hover:text-slate-300" />
            </Link>
          </IconButton>
        </Tooltip>
        <Tooltip
          TransitionComponent={Zoom}
          title="Administracion"
          placement="right"
        >
          <IconButton aria-label="Inventario">
            <Inventory2 className="text-zinc-200 hover:text-slate-300" />
          </IconButton>
        </Tooltip>
        <Tooltip TransitionComponent={Zoom} title="Compras" placement="right">
          <IconButton aria-label="Pedidos">
            <LocalShipping className="text-zinc-200 hover:text-slate-300" />
          </IconButton>
        </Tooltip>
        <Tooltip TransitionComponent={Zoom} title="Exit" placement="right">
          <IconButton onClick={() => Exit()} aria-label="Salir">
            <Logout className="text-zinc-200 hover:text-slate-300" />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
}

export default NavAdmin;

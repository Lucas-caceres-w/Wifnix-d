import { HomeOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import Link from "next/link";

function CatShop() {
  return (
    <div className="flex flex-row items-center pl-8 mt-10 gap-4">
      <Link href={"/tienda"}>
        <IconButton>
          <HomeOutlined className="text-gray-400 text-3xl" />
        </IconButton>
      </Link>
      <ul className="flex flex-row h-min flex-wrap gap-3 list-categories">
        <li className="w-28 py-2 text-center text-base">All Categories</li>
        <li className="w-28 py-2 text-center text-base">All Categories</li>
        <li className="w-28 py-2 text-center text-base">All Categories</li>
        <li className="w-28 py-2 text-center text-base">All Categories</li>
        <li className="w-28 py-2 text-center text-base">All Categories</li>
      </ul>
    </div>
  );
}

export default CatShop;

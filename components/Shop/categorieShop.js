import { HomeOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

function CatShop() {
  const router = useRouter();
  
  return (
    <div className="flex flex-row items-center pl-8 mt-10 gap-4">
      <Link href={"/"}>
        <IconButton>
          <HomeOutlined className="text-gray-400 text-3xl" />
        </IconButton>
      </Link>
      <ul className="flex flex-row h-min w-max flex-wrap gap-2">
        {router.asPath.split(/[/?=]/).map((e, index) => {
          if (e.length > 0) {
            return (
              <Link
                href={"/tienda"}
                key={index}
                className="cursor-pointer w-max px-4 py-1 rounded-full text-center bg-gray-200 text-base hover:bg-slate-300"
              >
                {e.replace(/%20/g, " ")}
              </Link>
            );
          }
          return null;
        })}
      </ul>
    </div>
  );
}

export default CatShop;

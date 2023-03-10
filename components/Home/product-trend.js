import { ShoppingCart } from "@mui/icons-material";
import { Skeleton } from "@mui/material";
import Link from "next/link";

function ProducTrend(props) {
  return (
    <div className="cursor-pointer h-80 bg-neutral-200 rounded-sm flex flex-col items-center justify-center w-30 md:w-48 lg:w-52 xl:w-60">
      <div className="h-2/4 w-full flex items-center object-cover">
        {props.image ? (
          props.image.length <= 0 ? (
            <img className="w-full h-full" src="/assets/no-available.webp" />
          ) : (
            props.image[0]
          )
        ) : (
          <Skeleton className="w-full h-56" />
        )}
      </div>
      <div className="h-32 w-10/12 flex flex-col justify-between gap-2">
        <div>
          <p className="font-bold w-full text-xs sm:text-sm md:text-base lg:text-base">
            {props.title ? (
              props.title
            ) : (
              <Skeleton
                className="my-2"
                variant="rounded"
                width={"80%"}
                height={"20px"}
              />
            )}
          </p>
          <div className="stock-point flex flex-col md:flex-row justify-between">
            <p className="text-xs sm:text-xs md:text-sm lg:text-base flex flex-row gap-2">
              <span>
                {props ? (
                  "⭐⭐⭐⭐"
                ) : (
                  <Skeleton variant="rounded" width={"40px"} height={"15px"} />
                )}
              </span>
              <b style={{ fontWeight: "600", fontSize: "14px" }}>
                {props.stock ? (
                  props.stock
                ) : (
                  <Skeleton variant="rounded" width={"25px"} height={"15px"} />
                )}
              </b>
            </p>
            {props.stock ? (
              props.stock > 0 ? (
                <p className="text-green-500 font-semibold text-xs md:text-sm lg:text-md xl:text-base">
                  In stock
                </p>
              ) : (
                <p className="text-red-500 font-semibold text-xs md:text-sm lg:text-md xl:text-base">
                  No stock
                </p>
              )
            ) : (
              <Skeleton variant="rounded" width={"50px"} height={"15px"} />
            )}
          </div>
        </div>
        <div className="price-cart">
          <div>
            <p
              style={{
                color: "#35a7ff",
                fontWeight: "600",
                fontSize: "10px",
                margin: 0,
              }}
            >
              TOP SELLER
            </p>
            <p className="m-0 text-sm sm:text-md md:text-lg lg:text-xl font-semibold flex flex-row">
              US${" "}
              {props.price ? (
                props.price
              ) : (
                <Skeleton variant="rounded" width={"50px"} height={"30px"} />
              )}
            </p>
          </div>
          {props.id && (
            <div className="mt-3 w-10 h-10 bg-blue-300 p-2 rounded-md hover:bg-blue-400 hover:shadow-slate-600 hover:shadow-md">
              <Link href={`/tienda/${props.id}`}>
                <ShoppingCart />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProducTrend;

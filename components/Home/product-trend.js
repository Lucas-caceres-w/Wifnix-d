import { ShoppingCart } from "@mui/icons-material";
import { Skeleton } from "@mui/material";
import Link from "next/link";

function ProducTrend(props) {
  return (
    <div className="cursor-pointer product-trending flex flex-col justify-between w-30 sm:w-36 md:w-44 lg:w-54 xl:w-64">
      <div className="h-52 flex items-center img-product-trending">
        <img className="w-full" src="/assets/camara.png" alt="img" />
      </div>
      <div className="datos-product gap-3">
        <div>
          <p className="font-bold text-xs sm:text-sm md:text-md lg:text-lg">
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
            <p className="text-xs sm:text-xs md:text-sm lg:text-base">
              ⭐⭐⭐⭐{" "}
              <b style={{ fontWeight: "600", fontSize: "14px" }}>
                {props.stock ? (
                  props.stock
                ) : (
                  <Skeleton variant="rounded" width={"55px"} height={"15px"} />
                )}
              </b>
            </p>
            <p className="text-green-500 font-semibold text-xs md:text-sm lg:text-base">
              In stock
            </p>
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
            <p className="m-0 text-sm sm:text-md md:text-lg lg:text-2xl font-semibold">
              US${" "}
              {props.price ? (
                props.price
              ) : (
                <Skeleton variant="rounded" width={"50px"} height={"30px"} />
              )}
            </p>
          </div>
          <div className="mt-3  bg-blue-200 p-2 rounded-full hover:text-blue-400 hover:bg-white ">
            <Link href={`/tienda/${props.id}`}>
              <ShoppingCart />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProducTrend;

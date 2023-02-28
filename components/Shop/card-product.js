import { ShoppingCart } from "@mui/icons-material";
import Link from "next/link";

function CardProduct(props) {
  return (
    <div
      id={props.key}
      className="h-56 w-[500px] items-center p-2 card-product flex flex-col lg:flex-row justify-around rounded shadow-md shadow-slate-300"
    >
      {props.image && props.image[0]}
      <div className="flex flex-col justify-content-evenly w-full gap-1 text-left ml-2">
        <div className="relative">
          <h2 className="text-2xl font-semibold">{props.product}</h2>
          <p className="absolute -bottom-7 left-0">{props.stock}⭐⭐⭐⭐</p>
          <p className="absolute -bottom-12 left-0 text-green-500 font-semibold">
            In stock
          </p>
        </div>
        <div className="flex flex-row justify-between">
          <div>
            <ul className="caracteristicas pl-8 flex flex-col gap-1 pt-12">
              {props.details}
            </ul>
          </div>
          <div className="text-center flex flex-col items-center gap-1 pr-5 pt-3">
            <p className="inline-block text-2xl font-bold">
              US$ {props.price}
              <sup className="text-xs underline font-medium">99</sup>
            </p>
            <p className="text-xs font-medium text-blue-500">TOP SELLER</p>
            <Link href={`/tienda/${props.id}`}>
              <ShoppingCart />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardProduct;

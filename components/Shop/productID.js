import { useState } from "react";
import Details from "./detailsID";
import Packs from "./oferts-kits";
import SocialMedia from "../layout/socialmedia";
import Footer from "../layout/footer";
import MuestraProducts from "../layout/getproduct";
import { Skeleton } from "@mui/material";

function ProductId(props) {
  const [cantidad, setCantidad] = useState(1);

  const SumarCantidad = (e) => {
    setCantidad(e.target.value);
  };

  let images = props.image;
  return (
    <>
      <section className="py-12 flex flex-col lg:flex-row justify-evenly">
        <article className="w-6/12 flex flex-col items-center m-auto">
          <div className="text-left">
            <h2 className="text-5xl font-bold">
              {props.product ? props.product : <Skeleton className="w-full h-24 "/>}
            </h2>
            <div className="flex flex-row my-2 gap-3">
              <div>⭐⭐⭐⭐</div>
              <p>
                {props.quantity && props.quantity} ratings || 20 answered
                questions
              </p>
            </div>
          </div>
          {props.image ? (
            <img src={images[0]} />
          ) : (
            <div className="w-full">
              <Skeleton className="w-10/12 m-auto h-[450px]"/>
            </div>
          )}
          <div className="flex flex-row w-2/12 m-auto">
            {images?.map((image, index) => (
              <img src={image} key={index} />
            ))}
          </div>
        </article>
        <div className="w-5/12">
          <div className="text-left mt-24">
            <p className="color-blue font-medium flex flex-row items-start">
              List Price: $<s>{props.price && props.price * 2 - 200}</s>
              <sup className="text-xs">
                <s>99</s>
              </sup>
            </p>
            <p className="text-5xl font-extrabold flex flex-row ">
              US${props.price ? props.price : <Skeleton className="w-24 h-24"/>}
              <sup className="text-3xl">99</sup>
            </p>
            <p className="text-sm text-blue-500 font-medium">TOP SELLER</p>
          </div>
          <div className="mt-8 color-blue font-medium">
            <p>
              You Save <span className="text-yellow-500">$33.00 (10%)</span>
            </p>
            <p className="mt-8 color-blue text-sm">
              Including VAT; Excluding $8 Shipping to Puerto Rico{" "}
              <span className="text-blue-400">Details</span>
            </p>
            <p className="mt-6 text-green-500 font-semibold text-lg">
              {props.quantity && props.quantity > 0 && "In stock"}
            </p>
          </div>
          <div className="flex flex-row gap-4 mt-3">
            <input
              className="w-16 p-4 font-semibold text-xl rounded-3xl border-2 border-slate-800"
              value={cantidad}
              type={"number"}
              onChange={(e) => SumarCantidad(e)}
            />
            <button className="p-4 w-48 font-semibold text-white bg-blue-600 rounded-full">
              Add to basket
            </button>
          </div>
          <article className="w-11/12 mt-8">
            <table className="w-full table border-separate border-spacing-2">
              <tbody className="text-sm">
                <tr className="">
                  <td className="w-2/4">
                    <li className="font-bold">Recommended Uses For Product</li>
                  </td>
                  <td className="font-medium text-sm">Indoor</td>
                </tr>
                <tr className="">
                  <td className="w-2/4">
                    <li className="font-bold">Brand</li>
                  </td>
                  <td className="font-medium text-sm">Tp-Link</td>
                </tr>
                <tr className="">
                  <td className="w-2/4">
                    <li className="font-bold">Model Name</li>
                  </td>
                  <td className="font-medium text-sm">Tapo C110</td>
                </tr>
                <tr className="">
                  <td className="w-2/4">
                    <li className="font-bold">Connectivity Technology</li>
                  </td>
                  <td className="font-medium text-sm">Wireless</td>
                </tr>
                <tr className="">
                  <td className="w-2/4">
                    <li className="font-bold">Special Feature</li>
                  </td>
                  <td className="font-medium text-sm">
                    Local Recording , HD Resolution, Night Vision, Image Sensor
                    ,Frame Rate
                  </td>
                </tr>
              </tbody>
            </table>
          </article>
        </div>
      </section>
      <span className="separador"></span>
      <Details />
      <span className="separador"></span>
      <Packs />
      <span className="separador"></span>
      <h2 className="title-section text-3xl md:text-5xl py-2">
        Productos recomendados
      </h2>
      <MuestraProducts />
      <span className="separador"></span>
      <h2 className="title-section text-3xl md:text-5xl py-2">Comparar</h2>
      <MuestraProducts />
      <span className="separador"></span>
      <SocialMedia text={"You have doubts?"} />
      <Footer />
    </>
  );
}

export default ProductId;

import { ArrowForward, Close, LocalShipping } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { LocalStorageContext } from "../Context";

function CartItems() {
  const [products, setProducts] = useState(() => {
    const json =
      typeof localStorage !== "undefined"
        ? localStorage.getItem("product")
        : undefined;
    return json ? JSON.parse(json) : [];
  });
  const { setCount } = useContext(LocalStorageContext);

  const removeProduct = (id) => {
    const updatedProducts = products.filter((p) => p.id !== id);
    setProducts(updatedProducts);
    localStorage.setItem("product", JSON.stringify(updatedProducts));
    
    const countLocal = JSON.parse(localStorage.getItem("product"));
    setCount(countLocal.length);
  };

  useEffect(() => {
    const ProductCart = () => {
      let json = localStorage.getItem("product");
      setProducts(JSON.parse(json));
    };
    ProductCart();
  }, []);

  return (
    <div className="w-10/12 m-auto mt-12 mb-12">
      <h2 className="font-bold text-5xl">You Shopping Basket</h2>
      <section className="mt-24 flex flex-row justify-center gap-12">
        <div className="flex flex-col gap-2 items-end">
          <div className="w-full px-4 text-lg font-bold flex flex-col flex-wrap items-center border border-slate-300 rounded-3xl">
            {products.length > 0 ? (
              products.map((e) => {
                return (
                  <div
                    key={e.id}
                    className="flex flex-col lg:flex-row w-full gap-2 items-center justify-between border-b border-b-gray-400"
                  >
                    <img className="w-48" src={e.image && e.image[0]} />
                    <div className="flex flex-col lg:flex-row flex-wrap gap-2 justify-around items-center">
                      <p className="text-xs sm:text-sm md:text-base">
                        {e.product && e.product}
                      </p>
                      <p className="text-xs sm:text-sm md:text-base">
                        US${e.price && e.price}
                        <sup>99</sup>
                      </p>
                      <input
                        type={"number"}
                        value="1"
                        className="text-center w-16 py-3 border border-slate-500 rounded-2xl"
                      />
                    </div>
                    <IconButton
                      onClick={() => removeProduct(e.id)}
                      className="bg-red-300 hover:bg-red-400"
                    >
                      <Close />
                    </IconButton>
                  </div>
                );
              })
            ) : (
              <p>No se encuentran productos</p>
            )}
          </div>
          <div className="bg-gray-100 py-8 flex flex-row justify-around rounded-md p-5 text-left w-9/12">
            <div className="flex flex-col gap-4 font-semibold text-gray-500">
              <p>Country of Delivery</p>
              <p>Shipping costs</p>
            </div>
            <div className="flex flex-col gap-4 font-bold text-xl">
              <p>Puerto Rico</p>
              <p>
                USD$ 2<sup>99</sup>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 items-end">
          <div className="text-center rounded-lg items-center bg-gray-100 w-96 h-48 flex flex-col justify-evenly">
            <div>
              <p className="text-3xl font-bold">
                Total $297<sup>99</sup>
              </p>
              <p className="font-semibold text-gray-600">
                The prices shown includes VAT.
              </p>
            </div>
            <button className="bg-white w-max px-6 py-3 border border-blue-900 color-blue rounded-full font-bold">
              To checkout
              <ArrowForward />
            </button>
          </div>
          <div className="w-96 h-48 border-4 rounded-xl border-green-400 flex flex-col justify-center items-center">
            <div className="text-center text-6xl">
              <LocalShipping fontSize="inherit" />
            </div>
            <p className="w-10/12 text-center text-sm">
              All items in your shopping basket are in stock and can be shipped
              inmediately
            </p>
          </div>
          <button className="flex flex-row items-center justify-between font-semibold rounded-full border-2 w-64 border-blue-900 py-2 px-4">
            <ArrowForward /> <p>To PayPal</p>
            <img className="w-8" src="/assets/icons/paypal-fill.png" />
          </button>
        </div>
      </section>
    </div>
  );
}

export default CartItems;

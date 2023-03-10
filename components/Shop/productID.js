import { useEffect, useRef, useState } from "react";
import { Alert, Skeleton } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import Image from "next/image";
import { useContext } from "react";
import { LocalStorageContext } from "../Context";

function ProductId(props) {
  const [cantidad, setCantidad] = useState(1);
  const [currentImage, setCurrentImage] = useState(0);
  const [active, setActive] = useState(Boolean);
  const [carrito, setCarrito] = useState([]);
  const { setCount } = useContext(LocalStorageContext);

  const prevSlide = () => {
    if (currentImage === 0) {
      setCurrentImage(props.image.length - 1);
    } else {
      setCurrentImage(currentImage - 1);
    }
  };

  const nextSlide = () => {
    if (currentImage === props.image.length - 1) {
      setCurrentImage(0);
    } else {
      setCurrentImage(currentImage + 1);
    }
  };

  const SumarCantidad = (e) => {
    setCantidad(e.target.value);
  };

  const BuyProduct = () => {
    setCarrito([...carrito, props]);
    localStorage.setItem("product", JSON.stringify([...carrito, props]));
    const countLocal = JSON.parse(localStorage.getItem("product"));
    setCount(countLocal.length);
    props.setAlert(true);
    setTimeout(() => {
      props.setAlert(false);
    }, 1500);
    clearTimeout();
  };

  useEffect(() => {
    const carritoGuardado = JSON.parse(localStorage.getItem("product"));
    if (carritoGuardado) {
      setCarrito(carritoGuardado);
    }
    if (currentImage === 0) {
      setActive(true);
    } else if (currentImage === props.image.length - 1) {
      setActive(false);
    }
  }, [currentImage]);

  return (
    <>
      <section className="py-12 flex flex-col lg:flex-row justify-evenly">
        <article className="w-11/12 md:w-6/12 flex flex-col items-center m-auto">
          <div className="text-left">
            <h2 className="text-5xl font-bold">
              {props.product ? (
                props.product
              ) : (
                <Skeleton className="w-full h-24 " />
              )}
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
            <div className="w-full h-[550px] flex flex-col justify-around">
              <Image
                width={100}
                height={100}
                className="w-full h-full m-auto object-contain"
                src={props.image[currentImage]}
                id={currentImage}
                alt="image"
              />
              <div className="flex flex-row gap-2 m-auto items-center">
                <button
                  disabled={active === true && true}
                  className={
                    active === false
                      ? "text-white grid place-items-center bg-blue-400 text-4xl cursor-pointer hover:bg-blue-500 w-14 h-14 font-bold rounded-full"
                      : "text-white grid place-items-center bg-gray-400 text-4xl w-14 h-14 font-bold rounded-full"
                  }
                  onClick={() => prevSlide()}
                >
                  <ArrowBack fontSize="large" />
                </button>
                {props.image.map((e, index) => {
                  return (
                    <div
                      className={
                        currentImage === index
                          ? "w-16 h-16 shadow-md shadow-slate-800 object-contain overflow-hidden"
                          : "w-14 h-14 shadow-sm shadow-slate-800 object-contain overflow-hidden"
                      }
                      key={index}
                    >
                      <Image
                        width={100}
                        height={100}
                        id={index}
                        className="w-full"
                        src={e}
                        alt="image"
                      />
                    </div>
                  );
                })}
                <button
                  disabled={!active === true && true}
                  className={
                    active === true
                      ? "text-white grid place-items-center bg-blue-400 text-4xl cursor-pointer hover:bg-blue-500 w-14 h-14 font-bold rounded-full"
                      : "text-white grid place-items-center bg-gray-400 text-4xl w-14 h-14 font-bold rounded-full"
                  }
                  onClick={() => nextSlide()}
                >
                  <ArrowForward fontSize="large" />
                </button>
              </div>
            </div>
          ) : (
            <div className="w-6/12">
              <Skeleton className="w-full m-auto h-[450px]" />
            </div>
          )}
        </article>
        <div className="w-11/12 md:w-5/12 m-auto">
          <div className="text-left mt-24">
            <p className="color-blue font-medium flex flex-row items-start">
              List Price: $<s>{props.price && props.price * 2 - 200}</s>
              <sup className="text-xs">
                <s>99</s>
              </sup>
            </p>
            <p className="text-5xl font-extrabold flex flex-row ">
              US$
              {props.price ? props.price : <Skeleton className="w-24 h-24" />}
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
            <button
              onClick={() => BuyProduct()}
              className="p-4 w-48 text-center grid place-items-center font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-full"
            >
              Add to basket
            </button>
          </div>
          <article className="w-11/12 mt-8">
            <table className="w-10/12 table border-separate border-spacing-2">
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
    </>
  );
}

export default ProductId;

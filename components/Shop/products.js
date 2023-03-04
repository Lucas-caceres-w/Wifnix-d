import { useEffect, useState } from "react";
import CardProduct from "./card-product";
import { GridView, HomeOutlined, Tune, UnfoldMore } from "@mui/icons-material";
import Link from "next/link";
import { IconButton } from "@mui/material";
import { Productos } from "../helpers/get-database";
import { useRouter } from "next/router";
import CatShop from "./categorieShop";

function ProductShop() {
  const [dataBase, setDataBase] = useState();
  const [categoria, setCategoria] = useState();
  const router = useRouter();
  const categorie = router.query;

  useEffect(() => {
    const fetchPost = async () => {
      const productos = await Productos();
      setDataBase(productos);
    };
    fetchPost();
    if (categorie) {
      setCategoria(categorie.categorie);
    }
  }, [categorie]);

  const Inventario = () => {
    return dataBase ? (
      dataBase?.map((e, index) => {
        const image64 = e.images.map((e) => {
          return <img className="w-44" src={e} key={index} />;
        });

        let detalles = e.details.split(",").map((e, index) => {
          return (
            <li key={index} className="text-xs font-semibold list-disc">
              {e.trim()}
            </li>
          );
        });
        return (
          <CardProduct
            key={index}
            id={e.id}
            price={e.price}
            product={e.product}
            stock={e.quantity}
            details={detalles}
            image={image64}
          />
        );
      })
    ) : (
      <>
        <img className="mt-12 w-24" src="/assets/oval.svg" />
      </>
    );
  };

  return (
    <>
      <div className="hero-products">
        <div className="modal-hero">
          <h2>{categoria ? categoria : "All"}</h2>
        </div>
      </div>
      <article className="">
        <div className="flex flex-col gap-4 pt-10 pb-2">
          <CatShop />
          <div className="pt-10 filter-between flex flex-row justify-between">
            <p className="text-footer flex flex-row items-center">
              <Tune className="text-black text-3xl" /> Filter
            </p>
            <p className="text-footer flex flex-row items-center">
              Popularity
              <UnfoldMore className="text-black text-3xl" />
              <GridView className="text-black text-3xl" />
            </p>
          </div>
        </div>
      </article>
      <div className="separador"></div>
      <section className="flex flex-row gap-5">
        <article className="filtros my-5 gap-4">
          <div className="flex flex-col gap-2">
            <h3 className="text-footer">Category</h3>
            <div className="check-filter">
              <input type={"checkbox"} name="4k" />
              <label htmlFor="4k">4K</label>
            </div>
            <div className="check-filter">
              <input type={"checkbox"} name="thermal" />
              <label htmlFor="thermal">Thermal</label>
            </div>
            <div className="check-filter">
              <input type={"checkbox"} name="corrosion" />
              <label htmlFor="corrosion">Anti-corrosión</label>
            </div>
            <div className="check-filter">
              <input type={"checkbox"} name="box" />
              <label htmlFor="box">Box</label>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-footer">Brand</h3>
            <div className="check-filter">
              <input type={"checkbox"} name="TP-Link" />
              <label htmlFor="TP-Link">TP-Link</label>
            </div>
            <div className="check-filter">
              <input type={"checkbox"} name="Xiaomi" />
              <label htmlFor="Xiaomi">Xiaomi</label>
            </div>
            <div className="check-filter">
              <input type={"checkbox"} name="denver" />
              <label htmlFor="denver">Denver</label>
            </div>
            <div className="check-filter">
              <input type={"checkbox"} name="SIGN" />
              <label htmlFor="SIGN">SIGN</label>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-footer">Price Range</h3>
            <div className="range-conteiner">
              <input className="range-price" type={"number"} placeholder="0" />
              <span className="line"></span>
              <input
                className="range-price"
                type={"number"}
                placeholder="1930"
              />
              <b>$</b>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-footer">Availability</h3>
            <div className="check-filter">
              <input type={"checkbox"} />
              <label>Only stock (42)</label>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-footer">Ratings</h3>
            <div className="check-filter">
              <input type={"checkbox"} />
              <label>⭐⭐⭐⭐⭐</label>
            </div>
            <div className="check-filter">
              <input type={"checkbox"} />
              <label>⭐⭐⭐⭐</label>
            </div>
            <div className="check-filter">
              <input type={"checkbox"} />
              <label>⭐⭐⭐</label>
            </div>
            <div className="check-filter">
              <input type={"checkbox"} />
              <label>⭐⭐</label>
            </div>
            <div>
              <input type={"checkbox"} />
              <label>⭐</label>
            </div>
          </div>
        </article>
        <main className="mt-5 pb-10 m-auto grid grid-cols-1 xl:grid-cols-2 justify-center gap-4">
          <Inventario />
        </main>
      </section>
      <div className="separador mt-5"></div>
    </>
  );
}

export default ProductShop;

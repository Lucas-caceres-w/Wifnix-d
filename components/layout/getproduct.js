import { useEffect, useState } from "react";
import ProducTrend from "../Home/product-trend";
import { Productos } from "../helpers/get-database";

function MuestraProducts() {
  const [product, setProduct] = useState();

  useEffect(() => {
    const fetchPost = async () => {
      const productos = await Productos();
      setProduct(productos);
    };
    fetchPost();
  }, []);
  return (
    <article className="grid grid-cols-3 gap-2 md:grid-cols-4 lg:grid-cols-5 justify-around w-full lg:w-11/12 justify-items-center py-4 m-auto">
      {product ? (
        product.slice(0, 5).map((e) => {
          const image64 = e.images.map((e, index) => {
            return <img className="w-full" src={e} key={index} />;
          });
          return (
            <ProducTrend
              key={e.id}
              id={e.id}
              title={e.product}
              price={e.price}
              stock={e.quantity}
              image={image64}
            />
          );
        })
      ) : (
        <>
          <ProducTrend />
          <ProducTrend />
          <ProducTrend />
          <ProducTrend />
          <ProducTrend />
        </>
      )}
    </article>
  );
}

export default MuestraProducts;

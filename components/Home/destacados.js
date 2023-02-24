import MuestraProducts from "../layout/getproduct";

function Destacados() {
  return (
    <section>
      <h2 className="title-section text-3xl md:text-5xl py-2">Destacados</h2>
      <div className="trending">
        <a className="a-trending" href="#">
          Tendencias
        </a>
        <a className="a-trending" href="#">
          Novedades
        </a>
        <a className="a-trending" href="#">
          Top Seller
        </a>
      </div>
      <MuestraProducts />
    </section>
  );
}

export default Destacados;

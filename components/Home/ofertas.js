import MuestraProducts from "../layout/getproduct";

function Ofertas() {
  return (
    <section>
      <h2 className="title-section mt-5 text-3xl md:text-5xl py-2">Ofertas</h2>
      <div className="trending ofertas">
        <a className="a-trending" href="#">
          Hot Deals
        </a>
        <a className="a-trending" href="#">
          Oportunidades
        </a>
      </div>
      <MuestraProducts />
    </section>
  );
}

export default Ofertas;

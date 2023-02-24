import Categoria from "./categorie";

function Categories() {
  return (
    <div className="main-categories">
      <h2 className="title-section text-3xl md:text-5xl py-2">
        Nuestras Categorías
      </h2>
      <section className="grid-categories">
        <Categoria path="Camera" src="/assets/camara.png" categoria="camera" />
        <Categoria
          path="Security Kit"
          src="/assets/kit.png"
          categoria="Security Kit"
        />
        <Categoria
          path="Conectors"
          src="/assets/conectores.png"
          categoria="Conectors and Accesories"
        />
        <Categoria
          path="Monitoring"
          src="/assets/monitoreo.png"
          categoria="Monitoring"
        />
        <Categoria
          path="Recorders"
          src="/assets/grabadora.webp"
          categoria="Recorders"
        />
      </section>
    </div>
  );
}

export default Categories;

import Image from "next/image";

function Marcas() {
  return (
    <div className="marcas-conteiner">
      <h2 className="title-section text-3xl md:text-5xl py-2">Marcas Populares</h2>
      <div className="img-marcas my-16">
        <Image width={100} height={70} src="/assets/marca-e.png" alt="marca" />
      </div>
    </div>
  );
}

export default Marcas;


import Descripcion from "./descripcion";
import GridTeam from "./grid-team";

function Nosotros() {
  return (
    <>
      <Descripcion />
      <article className="w-11/12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl transition-all text-center w-8/12 m-auto font-bold pb-16 color-blue">
          Our <b className="text-blue-400">Team</b>
        </h2>
        <GridTeam />
      </article>
    </>
  );
}

export default Nosotros;

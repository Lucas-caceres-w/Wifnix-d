import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Nosotros from "../About/nosotros";
import Contacto from "./contacto";

function About() {
  const [section, setSection] = useState();
  const router = useRouter();
  const seccionUrl = router.query;

  //En este useEffect se obtiene la seccion seleccionada y se muestra el componente que corresponde
  useEffect(() => {
    //console.log(seccionUrl)
    if (seccionUrl) {
      setSection(seccionUrl.section);
    }
  }, [seccionUrl]);

  //Se obtiene la url activa, y se muestra en el link seleccionado
  const Active = (e) => {
    setSection(e);
    window.history.pushState({}, null, `?section=${e}`);
  };

  return (
    <>
      <div className="flex flex-row justify-evenly mt-24 pb-24">
        <section className="w-3/12">
          <ul className="text-left pl-2 flex flex-col gap-4 font-bold text-xs lg:text-sm lg:pl-12">
            <li>
              <button
                style={{ color: section === "nosotros" ? "#48e" : "#111" }}
                value="nosotros"
                className="text-left"
                onClick={() => Active("nosotros")}
              >
                Sobre Nosotros
              </button>
            </li>
            <li>
              <button
                style={{ color: section === "contacto" ? "#48e" : "#111" }}
                value="contacto"
                className="text-left "
                onClick={() => Active("contacto")}
              >
                Contacto
              </button>
            </li>
            <li>
              <button
                style={{ color: section === "faqs" ? "#48e" : "#111" }}
                value="faqs"
                className="text-left focus:text-blue-400"
                onClick={() => setSection("faqs")}
              >
                Preguntas Frecuentes
              </button>
            </li>
            <li>
              <button
                style={{ color: section === "gastos" ? "#48e" : "#111" }}
                value="gastos"
                className="text-left focus:text-blue-400"
                onClick={() => setSection("gastos")}
              >
                Gastos de envio y plazos
              </button>
            </li>
            <li>
              <button
                style={{ color: section === "servicios" ? "#48e" : "#111" }}
                value="servicios"
                className="text-left focus:text-blue-400"
                onClick={() => setSection("servicios")}
              >
                Servicio de mantenimiento <br /> y reparaciones
              </button>
            </li>
            <li>
              <button
                style={{ color: section === "devolucion" ? "#48e" : "#111" }}
                value="devolucion"
                className="text-left focus:text-blue-400"
                onClick={() => setSection("devolucion")}
              >
                Devolver un producto
              </button>
            </li>
            <li>
              <button
                style={{ color: section === "ventajas" ? "#48e" : "#111" }}
                value="ventajas"
                className="text-left focus:text-blue-400"
                onClick={() => setSection("ventajas")}
              >
                Nuestras Ventajas
              </button>
            </li>
          </ul>
        </section>
        <section className="w-10/12 m-auto">
          {section === "nosotros" && <Nosotros />}
          {section === "contacto" && <Contacto />}
          {section === "faqs" && "FAQS"}
          {section === "gastos" && "GASTOS"}
          {section === "servicios" && "SERVICIOS"}
          {section === "devolucion" && "DEVOLUCION"}
          {section === "ventajas" && "VENTAJAS"}
        </section>
      </div>
    </>
  );
}

export default About;

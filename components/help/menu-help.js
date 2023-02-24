import Acount from "./acount";

function Menu() {
  return (
    <main className="flex flex-row items-center justify-around py-5 pb-24">
      <section className="6/12 m-auto">
        <p className=" py-20 color-blue text-3xl font-bold text-center">Servicio de ayuda</p>
        <div className="pt-14">
          <ul className="color-blue text-sm font-medium flex flex-col gap-10">
            <li>Creación de una cuenta</li>
            <li>Tu perfil</li>
            <li>Sobre Blockchains</li>
            <li>Sobre el Servicio de Seruridad</li>
            <li>Sobre el Servicio de Internet</li>
            <li>Sobre nuestro servicio de Diseño</li>
          </ul>
        </div>
      </section>
      <Acount />
    </main>
  );
}

export default Menu;

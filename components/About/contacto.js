function Contacto() {
  return (
    <section className="w-10/12 m-auto">
      <div>
        <p className="text-3xl sm:text-5xl font-bold text-center">Contacto</p>
        <p className="mt-8 w-10/12 text-xs sm:text-base font-medium m-auto color-blue">
          Como cliente de Thomann puede ponerse en contacto telefonico o por
          correo electronico con nuestros departamentos, especialistas y
          directivos. En esta pagina encontrara las direcciones de e-mail y los
          telefonos directos de nuestros departamentos
        </p>
      </div>
      <div className="mt-12 sm:mt-24 w-11/12 sm:w-11/12 text-sm font-medium m-auto color-blue">
        <p className="mb-6 text-black font-bold text-2xl">Cómo contactarnos</p>
        <article className="w-10/12 pl-7 flex flex-col gap-8">
          <p>
            Tras realizar su compra, nuestro servicio al cliente queda a su
            disposicion ante cualquier problema o duda.
          </p>
          <div>
            <p className="font-bold text-lg">Tenga preparado el número de cliente</p>
            <p>
              Por favor, antes de la llamada tenga preparado su número de
              cliente si es posible. En la mayoría de los casos podemos ayudarle
              así más rapidamente. Simplemente inicie sesión en el Centro de
              Clientes, se mostrara alli su número de cliente.
            </p>
          </div>
          <p className="font-bold text-lg">Horario de apertura</p>
          <table className="w-48">
            <tbody className="color-blue font-medium text-sm">
              <tr>
                <td>Jueves</td>
                <td>&nbsp;</td>
                <td>09:30 - 18:30</td>
              </tr>
              <tr>
                <td>Viernes</td>
                <td>&nbsp;</td>
                <td>09:30 - 18:30</td>
              </tr>
              <tr>
                <td>Sabado</td>
                <td>&nbsp;</td>
                <td>09:30 - 16:00</td>
              </tr>
              <tr>
                <td>Lunes</td>
                <td>&nbsp;</td>
                <td>09:30 - 18:30</td>
              </tr>
              <tr>
                <td>Martes</td>
                <td>&nbsp;</td>
                <td>09:30 - 18:30</td>
              </tr>
              <tr>
                <td>Miercoles</td>
                <td>&nbsp;</td>
                <td>09:30 - 18:30</td>
              </tr>
            </tbody>
          </table>
          <p className="w-11/12">
            Le rogamos entienda que solo podremos responder su cuestión durante
            el horario de oficina.
          </p>
        </article>
      </div>
    </section>
  );
}

export default Contacto;

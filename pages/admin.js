import Head from "next/head";
import Admin from "../components/admin/administracion";

function Administrador() {
  return (
    <>
      <Head>
        <title>Administration panel</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/assets/LogoWifnix.svg" />
      </Head>
      <nav className="relative h-max py-6 sm:h-28 flex flex-wrap items-center justify-center">
        <img className="sm:absolute left-12 w-24 gap-5" src="/assets/LogoWifnix.svg" />
        <h2 className="text-center color-blue font-bold text-3xl">
          Product Management
        </h2>
      </nav>
      <Admin />
    </>
  );
}

export default Administrador;

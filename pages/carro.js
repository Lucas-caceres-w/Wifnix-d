import Head from "next/head";
import InfoBuy from "../components/CartItem/BuyInfo";
import BuyOptions from "../components/CartItem/Buyoptions";
import CartItems from "../components/CartItem/CartProducts";
import Footer from "../components/layout/footer";
import MuestraProducts from "../components/layout/getproduct";
import NavBar from "../components/layout/navbar";
import SocialMedia from "../components/layout/socialmedia";

function CarroItems() {
  return (
    <div>
      <Head>
        <title>Productos en carro</title>
        <link rel="icon" href="/assets/LogoWifnix.svg" />
      </Head>
      <NavBar />
      <CartItems />
      <BuyOptions />
      <h2 className="text-center mt-24 color-blue font-bold text-4xl">
        Productos Recomendados
      </h2>
      <MuestraProducts />
      <InfoBuy />
      <span className="separador"></span>
      <SocialMedia text="You have doubts?" />
      <Footer />
    </div>
  );
}

export default CarroItems;

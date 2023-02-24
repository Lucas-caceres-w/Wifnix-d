import Head from "next/head";
import Navbar from "../components/layout/navbar";
import ProductShop from "../components/Shop/products";
import SocialMedia from "../components/layout/socialmedia";
import Footer from "../components/layout/footer";

function tienda() {
  return (
    <>
      <Head>
        <title>Tienda Wifnix</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/assets/LogoWifnix.svg" />
      </Head>
      <Navbar />
      <ProductShop />
      <SocialMedia text={'You have doubts?'} />
      <Footer />
    </>
  );
}

export default tienda;
import {
  AccountCircle,
  Close,
  Dashboard,
  Favorite,
  Language,
  Logout,
  Menu,
  ShoppingCart,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

function Navbar() {
  let menu = useRef();
  let bgMenu = useRef();

  const [user, setUser] = useState();

  const OpenMenu = () => {
    menu.current.style.transform = "translateX(0)";
    bgMenu.current.style.visibility = "visible";
    bgMenu.current.style.display = "block";
    document.documentElement.style.overflowY = "hidden";
  };

  const CloseMenu = () => {
    menu.current.style.transform = "translateX(-18rem)";
    bgMenu.current.style.visibility = "hidden";
    bgMenu.current.style.display = "none";
    document.documentElement.style.overflowY = "scroll";
  };

  const Exit = async () => {
    try {
      const res = await axios.post("/api/logout");
      setTimeout(() => {
        setUser(null);
      }, 1000);
      clearTimeout();
    } catch (err) {
      //console.log(err);
    }
  };

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get("/api/users");
        const json = await res.data;
        if (res.status === 200) {
          //console.log(json);
          setUser(json);
        } else {
          setUser(null);
        }
      } catch (err) {
        //console.log(err);
      }
    };
    getUser();
  }, []);

  return (
    <>
      <nav className="navbar relative">
        {user ? (
          <p className="text-sm text-blue-500 font-medium absolute right-2 bottom-2">
            {user.user}
          </p>
        ) : null}
        <div className="logo-conteiner">
          <Link href="/">
            <img width={"90px"} alt="logo" src="/assets/LogoWifnix.svg" />
          </Link>
        </div>
        <div className="menu-conteiner gap-2 md:lg-gap-4 lg:gap-6 xl:gap-8">
          <Link href="/about?section=servicios">Services</Link>
          <Link href="/about?section=nosotros">About Us</Link>
          <Link href="/about?section=contacto">Contact us</Link>
        </div>
        <div className="search-conteiner">
          <input className="search" type={"search"} placeholder="Search" />
        </div>
        <div className="profile-conteiner items-center">
          <Link className="flex flex-row items-center" href="#">
            <p>ES - $</p>
            <Language />
          </Link>
          {user ? (
            <Link href="/profile">
              <AccountCircle />
            </Link>
          ) : (
            <Link href="/login">
              <AccountCircle />
            </Link>
          )}
          <Link href="#">
            <Favorite />
          </Link>
          <Link href="/tienda">
            <ShoppingCart />
          </Link>
          {user && user.rol === "admin" ? (
            <Link href={"/admin"}>
              <Dashboard />
            </Link>
          ) : null}
          {user && user ? (
            <IconButton onClick={() => Exit()}>
              <Logout />
            </IconButton>
          ) : null}
          <IconButton
            className="block md:hidden cursor-pointer"
            onClick={() => OpenMenu()}
          >
            <Menu />
          </IconButton>
        </div>
      </nav>
      <section className="categories">
        <div className="links-categories">
          <Link href="/tienda?categorie=Cameras">Cameras</Link>
          <Link href="/tienda?categorie=Security Kit">Security Kit</Link>
          <Link href="/tienda?categorie=Connectors and Accesories">
            Connectors and Accesories
          </Link>
          <Link href="/tienda?categorie=Monitoring">Monitoring</Link>
          <Link href="/tienda?categorie=Recorders">Recorders</Link>
          <Link href="/tienda?categorie=Hot Deals">Hot Deals</Link>
          <Link href="/tienda?categorie=New">New</Link>
          <Link href="/tienda?categorie=Top-Seller">Top-Seller</Link>
        </div>
      </section>
      <div
        ref={menu}
        className="absolute bg-slate-50 w-54 h-screen z-50 px-4 -translate-x-72 transition-all"
      >
        <Close
          onClick={() => CloseMenu()}
          className="absolute right-2 top-2 cursor-pointer"
        />
        <div className="search-conteiner-rsp mt-10 mb-5">
          <input
            className="bg-gray-200 p-2 rounded-full outline-none"
            type={"search"}
            placeholder="Search"
          />
        </div>
        <span className="separador"></span>
        <div className="ml-4 mt-5 mb-5 flex flex-col gap-4 text-semibold color-blue font-medium">
          <Link className="" href="/about?section=servicios">
            Services
          </Link>
          <Link className="" href="/about?section=nosotros">
            About Us
          </Link>
          <Link className="" href="/about?section=contacto">
            Contact us
          </Link>
        </div>
        <span className="separador"></span>
        <div className="ml-4 mt-5 flex flex-col gap-4 text-semibold color-blue font-medium">
          <Link className="" href="/tienda?categorie=Cameras">
            Cameras
          </Link>
          <Link className="" href="/tienda?categorie=Security Kit">
            Security Kit
          </Link>
          <Link className="" href="/tienda?categorie=Connectors and Accesories">
            Connectors and Accesories
          </Link>
          <Link className="" href="/tienda?categorie=Monitoring">
            Monitoring
          </Link>
          <Link className="" href="/tienda?categorie=Recorders">
            Recorders
          </Link>
          <Link className="" href="/tienda?categorie=Hot Deals">
            Hot Deals{" "}
          </Link>
          <Link className="" href="/tienda?categorie=New">
            New
          </Link>
          <Link className="" href="/tienda?categorie=Top-Seller">
            Top-Seller
          </Link>
        </div>
      </div>
      <div
        ref={bgMenu}
        onClick={() => CloseMenu()}
        className="w-full z-40 invisible absolute bg-slate-900 bg-opacity-50 h-screen"
      ></div>
    </>
  );
}

export default Navbar;

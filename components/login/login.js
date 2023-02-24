import { AccountCircle, ArrowBack } from "@mui/icons-material";
import { Alert, IconButton, Modal } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useRef, useState } from "react";
import { useRouter } from "next/router";

function IniciarSesion() {
  const router = useRouter();

  //Manejan los error de inicio de sesion
  const [exist, setExist] = useState(false);
  const [existPass, setExistPass] = useState(false);

  //Abre el modal de registro de usuario
  const [open, setOpen] = useState(false);

  //Cambiar el valor de los inputs, segun sean seleccionados
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  //Muestran los datos del usuario que esta intentando iniciar sesion
  const [validate, setValidate] = useState(false);
  const [userExist, setUserExist] = useState();

  //Manejan los errores y estados del registro
  const [userRegister, setUserRegister] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState('');

  let form = useRef();
  let problems = useRef();

  //abre el modal
  const handleOpen = (e) => {
    e.preventDefault();
    HiddenBg();
    setOpen(true);
  };

  //cierra el modal
  const handleClose = () => {
    setOpen(false);
    ShowBg();
  };

  //oculta el fondo del modal
  const HiddenBg = () => {
    form.current.style.opacity = "0";
    form.current.style.transition = ".3s";
    problems.current.style.opacity = "0";
    problems.current.style.transition = ".3s";
  };

  //oscurece el fondo del modal
  const ShowBg = () => {
    form.current.style.opacity = "1";
    form.current.style.transition = ".3s";
    problems.current.style.opacity = "1";
    problems.current.style.transition = ".3s";
  };

  //Setean el state de user
  const HandleChange = (e) => {
    setUser(e.target.value);
    setError(ValidateRegister(e));
  };

  //blur para el usuario registrado
  const handleBlur = (e) => {
    HandleChange(e);
    setError(ValidateRegister(e));
  };

  //Si el usuario es valido, sigue el proximo paso
  const SubmitRegister = (e) => {
    e.preventDefault();
    setError(ValidateRegister(e));
    if (Object.keys(error).length === 0) {
      setUserRegister(user);
    }
  };

  //Setean el state de password
  const ChangePass = (e) => {
    setPass(e.target.value);
  };

  //Obtiene el user y si existe, sigue la validacion de password
  const CompareUser = async (e) => {
    e.preventDefault();
    //console.log(user);
    try {
      const res = await axios.post("/api/users", { user });
      const json = await res.data;
      setUser("");
      if (res.status === 200) {
        setValidate(true);
        setExist(false);
        setUserExist(json);
      } else {
        throw err;
      }
    } catch (err) {
      err;
      setUser("");
      setValidate(false);
      setExist(true);
      setTimeout(() => {
        setExist(false);
      }, 2000);
      clearTimeout();
    }
  };

  //Obtiene el password y lo compara en la db, dando acceso
  const ComparePassword = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/pass", { pass });
      const json = await res.data;
      console.log(json);
      if (res.status === 200) {
        if (json.rol === "admin") {
          router.push("/admin");
        } else {
          router.push("/");
        }
      }
    } catch (err) {
      setExistPass(true);
      setTimeout(() => {
        setExistPass(false);
      }, 2000);
    }
  };

  const ValidateRegister = async (e) => {
    let regex = {};

    const regexUser = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜüs]+$/;
    const regexEmail =
      /^[a-z0-9]+(.[_a-z0-9]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,15})$/;

    if (e.target.name === "user") {
      if (!e.target.value.trim()) {
        regex = "Complete el campo";
      } else if (!regexEmail.test(user.trim())) {
        regex = "El campo no es un correo electrónico válido";
      }
    }
    return regex;
  };

  return (
    <div className="flex flex-col">
      <section className="flex flex-col h-full justify-between">
        {exist === true && (
          <Alert
            open={exist === true}
            onClose={exist === false}
            className="absolute top-4 right-5 z-10"
            severity="error"
          >
            El usuario ingresado no existe!
          </Alert>
        )}
        {existPass === true && (
          <Alert
            open={existPass === true}
            onClose={existPass === false}
            className="absolute top-4 right-5 z-10"
            severity="error"
          >
            La contraseña es incorrecta, intente nuevamente!
          </Alert>
        )}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          {!userRegister ? (
            <form
              onSubmit={SubmitRegister}
              className="rounded translate-y-24 mt-5 w-96 m-auto bg-white px-4 py-6 flex flex-col justify-around items-center"
            >
              <p className="text-3xl text-slate-800 font-bold pt-4">
                Ingresà tu e-mail
              </p>
              <p className="text-sm font-semibold mt-1">
                Asegùrate de tener acceso a èl.
              </p>
              <input
                onBlur={handleBlur}
                onChange={HandleChange}
                name="user"
                className="input-login mt-4 w-11/12"
                type={"email"}
              />
              <input
                className="continue cursor-pointer"
                type={"submit"}
                value="Continuar"
              />
              <Link href={"/help"}>
                <p className="text-xs mt-4 text-blue-500">¿Necesitas ayuda?</p>
              </Link>
            </form>
          ) : (
            <form
              onSubmit={SubmitRegister}
              className="rounded translate-y-24 mt-5 w-96 m-auto bg-white px-4 py-6 flex flex-col justify-around items-center"
            >
              <IconButton>
                <ArrowBack onClick={() => setUserRegister(null)} />
              </IconButton>
              <p className="text-3xl text-slate-800 font-bold pt-4">
                Ingresà tu contraseña
              </p>
              <p className="text-sm font-semibold mt-1">
                Asegùrate de tener acceso a èl.
              </p>
              <input
                onBlur={handleBlur}
                onChange={HandleChange}
                className="input-login mt-4 w-11/12"
                type={"password"}
                value={password}
              />
              <input
                className="rounded-full bg-blue-500 px-4 py-2 text-slate-50 font-medium"
                type={"submit"}
                value="Registrarme"
              />
              <Link href={"/help"}>
                <p className="text-xs mt-4 text-blue-500">¿Necesitas ayuda?</p>
              </Link>
            </form>
          )}
        </Modal>
        <section className="w-full h-full flex flex-col md:flex-row justify-between relative bg-white">
          <Link href="/">
            <img className="logo" src="/assets/LogoWifnix.svg" />
          </Link>
          <div className="login-left">
            <div
              ref={problems}
              className="items-center gap-2 md:gap-12 flex flex-col w-full py-12"
            >
              {validate === false ? (
                <h2 className="text-2xl sm:text-3xl mt-12 sm:mt-0 lg:text-4xl font-bold color-blue leading-8 lg:leading-[3.2rem]">
                  Ingresá tu e-mail,
                  <br />
                  teléfono o usuario de <br />
                  Wifnix
                </h2>
              ) : (
                <section>
                  <h2 className="text-2xl sm:text-3xl mt-12 sm:mt-0 lg:text-4xl font-bold color-blue leading-8 lg:leading-[3.2rem]">
                    ¡Hola{" "}
                    <span className="capitalize">
                      {userExist && userExist.user}
                    </span>
                    !
                    <br /> Ingresa tu contraseña
                    <br /> de Wifnix
                  </h2>
                  <div className="p-2 mt-5 border border-gray-500 w-64 rounded-full flex flex-row justify-around items-center">
                    <AccountCircle className="text-blue-400 text-5xl" />
                    <div>
                      <p className="text-xs">{userExist && userExist.email}</p>
                      <p className="text-sm text-blue-400">Cambiar cuenta</p>
                    </div>
                  </div>
                </section>
              )}
              <div className="separador"></div>
              <div className="flex flex-col gap-3">
                <p
                  style={{ fontSize: "10px", fontWeight: "700" }}
                  className="reports"
                >
                  Reportar un problema
                </p>
                <p className="reports pb-3 border-b-2 border-slate-200">
                  Robo o pérdida de telefono
                </p>
                <p className="reports">Robo de cuenta</p>
                <Link href={"/help"} className="help">
                  Necesito ayuda con otros temas
                </Link>
              </div>
            </div>
          </div>
          <div className="img-login w-full md:w-2/4 h-full md:h-full">
            <div className="blur"></div>
            {validate === false ? (
              <form
                onSubmit={CompareUser}
                ref={form}
                className="formulario-login"
              >
                <div className="campos">
                  <label htmlFor="login">E-mail, telefono o usuario</label>
                  <input
                    onChange={HandleChange}
                    className="input-login"
                    type={"text"}
                    name="login"
                    value={user}
                    required
                  />
                  <div className="butons-login">
                    <input
                      className="continue cursor-pointer hover:bg-blue-600 transition-colors"
                      type={"submit"}
                      value="Continuar"
                    />
                    <button onClick={(e) => handleOpen(e)} className="register">
                      Crear Cuenta
                    </button>
                  </div>
                </div>
              </form>
            ) : (
              <form
                onSubmit={ComparePassword}
                className=" relative formulario-login px-4"
              >
                <div className="campos">
                  <div className="absolute right-2 top-2">
                    <IconButton onClick={() => setValidate(false)}>
                      <ArrowBack />
                    </IconButton>
                  </div>
                  <label htmlFor="login">Ingresa tu contraseña</label>
                  <input
                    onChange={ChangePass}
                    className="input-login"
                    type={"password"}
                    name="login"
                    value={pass}
                    required
                  />
                  <div className="butons-login">
                    <input
                      className="continue cursor-pointer hover:bg-blue-600 transition-colors"
                      type={"submit"}
                      value="Iniciar sesiòn"
                    />
                    <button className="text-blue-500">
                      ¿Olvidaste tu contraseña?
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </section>
      </section>
      <footer className="flex flex-between h-full sm:h-12 bg-gray-300 w-full">
        <div className="w-full flex-wrap sm:w-10/12 flex flex-row justify-between items-center ml-5 md:m-auto">
          <div>
            <p className="m-0 text-xs md:text-sm">
              <b>Como cuidamos tu privacidad</b> - Copyright © Wifnix.
            </p>
          </div>
          <div>
            <p className="m-0 text-xs md:text-sm">
              Protegido por reCAPTCHA - <b>Privacidad - Condiciones</b>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default IniciarSesion;

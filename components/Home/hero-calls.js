function Hero() {
  return (
    <section className="mt-5 flex flex-row justify-evenly items-center flex-wrap-reverse">
      <div className="hero-text">
        <h2 className="w-10/12 md:w-96">
          We are <b style={{ color: "#35a7ff" }}>working</b> for you!
        </h2>
        <p className="w-10/12 md:w-96">
          Puerto Rican company that offers IT services, Network, CCTV, Web
          Design and much more. if yo are
        </p>
        <div className="justify-around md:justify-start md:gap-5 flex flex-row">
          <button className="blue">Lets discuss</button>
          <button className="white">Lear more</button>
        </div>
      </div>
      <div className="conteiner-hero-img">
        <img src="/assets/IMG-1.png" />
        <span className="shape-blue"></span>
        <span className="shape-yellow"></span>
      </div>
    </section>
  );
}

export default Hero;

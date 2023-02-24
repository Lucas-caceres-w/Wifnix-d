function Packs() {
  return (
    <>
      <section className="flex flex-row justify-center py-12 gap-5 items-center">
        <div>
          <p className="leading-snug text-right font-bold text-5xl w-72 color-blue">Paquetes y Ofertas</p>
        </div>
        <div className="bg-blue-200/50 p-5 rounded-3xl flex flex-row">
          <img className="w-32" src="/assets/camara.png" />
          <div>
            <p className="font-semibold">TurboHD 1080p Lite Kit</p>
            <p className="font-semibold">Puede tener leves rastros de uso</p>
            <p className="font-bold text-2xl mt-1">
              US$297<sup>99</sup>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Packs;

function GridTeam() {
  const ItemGrid = () => {
    return (
      <div className="flex flex-col items-center gap-1 w-max">
        <img
          className="w-24 sm:w-24 md:w-32 lg:w-44 rounded-full transition-all"
          src="/assets/mujer-test.webp"
          alt="team"
        />
        <p className="font-bold color-blue text-xs sm:text-sm md:text-md lg:text-xl transition-all">Anna Gates</p>
        <p className="font-normal color-blue text-[10px] sm:text-xs md:text-sm lg:text-md transition-all">Web Designer</p>
      </div>
    );
  };
  return (
    <div className="grid grid-cols-3 w-full gap-y-5 sm:w-full md:w-10/12 lg:w-9/12 m-auto justify-items-center content-around place-items-center">
      <ItemGrid />
      <ItemGrid />
      <ItemGrid />
      <ItemGrid />
      <ItemGrid />
      <ItemGrid />
      <ItemGrid />
      <ItemGrid />
      <ItemGrid />
      <ItemGrid />
      <ItemGrid />
      <ItemGrid />
    </div>
  );
}

export default GridTeam;

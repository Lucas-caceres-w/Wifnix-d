function RatingUser() {
  return (
    <section className="w-10/12 m-auto">
      <div className="flex flex-row justify-start items-start py-5 gap-2">
        <img
          src="/assets/mujer-test.webp"
          className="w-16 rounded-full"
          alt="avatar"
        />
        <div className="flex flex-col">
          <p className="font-semibold text-2xl">I love it!</p>
          <div className="flex flex-row items-center">
            <p>⭐⭐⭐⭐</p>
            <p className="text-xs">Something123 08.07.2022</p>
          </div>
        </div>
      </div>
      <div>
        <p className="text-sm font-medium">
          For me FL feels great and its really fun to use, I do recommend
          checking out the trial first so you can see if you like ir before you
          buy it!
        </p>
        <p className="text-gray-500 py-4 font-medium underline">+ Show more</p>
      </div>
      <div className="flex flex-row gap-2 font-medium">
        <p>Like 10</p>
        <p>Dislike</p>
        <p>Report</p>
      </div>
    </section>
  );
}

export default RatingUser;

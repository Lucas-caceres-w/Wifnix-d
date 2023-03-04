import RatingUser from "./rating";

function Details() {
  return (
    <section className="flex flex-row mt-10 pb-12">
      <div className="w-3/4">
        <p className="text-center text-4xl font-bold">About this item</p>
        <article className="flex flex-col">
          <div className="mt-6 m-auto flex flex-col text-center font-medium gap-6 w-7/12">
            <p>
              TurboHD 1080p Lite Kit <br />
              (B8-KIT-CV)
            </p>
            <p>
              Kit includes: <br />
              1x S04-TURBO-G34 xB8-TURBO-C1xPower Supply for the 4 cameras 4 x
              Siamese cables for video and power (18 mts)
            </p>
          </div>
          <div className="flex flex-row flex-wrap gap-2 justify-around mt-10">
            <div className="border p-4 border-slate-300 rounded-xl">
              <img className="w-72" src="/assets/camara.png" />
              <div className="text-center">
                <h4 className="py-5 font-bold text-lg">1xSO4-TURBO-G3</h4>
                <p className="font-semibold">Features:</p>
                <ul className="font-medium list-disc w-max m-auto">
                  <li>example</li>
                  <li>example</li>
                  <li>example</li>
                  <li>example</li>
                  <li>example</li>
                  <li>example</li>
                  <li>example</li>
                </ul>
              </div>
            </div>
            <div className="border p-4 border-slate-300 rounded-xl">
              <img className="w-72" src="/assets/camara.png" />
              <div className="text-center">
                <h4 className="py-5 font-bold text-lg">1xSO4-TURBO-G3</h4>
                <p className="font-semibold">Features:</p>
                <ul className="font-medium list-disc w-max m-auto">
                  <li>example</li>
                  <li>example</li>
                  <li>example</li>
                  <li>example</li>
                  <li>example</li>
                  <li>example</li>
                  <li>example</li>
                </ul>
              </div>
            </div>
          </div>
        </article>
      </div>
      <div className="w-3/4 md:w-2/4 border m-2 border-slate-300 rounded-xl">
        <article>
          <div className="flex flex-col text-center py-5">
            <p className="py-4 text-2xl font-bold">156 Customer rating</p>
            <div className="flex flex-row justify-between w-10/12 m-auto">
              <div className="flex flex-row items-center gap-2 font-semibold">
                <p>⭐⭐⭐⭐⭐</p>
                <p>
                  4.7 <span className="opacity-50">/ 5</span>
                </p>
              </div>
              <button className="border border-black rounded-full px-4 py-2 font-semibold">
                Rate now
              </button>
            </div>
          </div>
        </article>
        <div className="ratings mt-16 flex flex-col h-[600px] overflow-y-scroll">
          <RatingUser />
          <RatingUser />
          <RatingUser />
          <RatingUser />
          <RatingUser />
          <RatingUser />
          <RatingUser />
        </div>
      </div>
    </section>
  );
}

export default Details;

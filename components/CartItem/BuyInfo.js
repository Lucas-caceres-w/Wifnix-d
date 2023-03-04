import ListOption from "./list-option";

function InfoBuy() {
  return (
    <div className="py-16 w-6/12 m-auto mt-12">
      <p className="text-left w-full color-blue text-4xl py-5 font-bold">
        Informacion de su compra
      </p>
      <ul className="py-12">
        <ListOption option="30-Day Money-Back Guarantee" />
        <ListOption option="3-Year Warranty" />
        <ListOption option="Highest Payment Security" />
        <ListOption option="What Happens after You Have Ordered?" />
        <ListOption option="Payment Methods" />
      </ul>
    </div>
  );
}

export default InfoBuy;

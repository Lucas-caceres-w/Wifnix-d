function SectionFooter() {
  return (
    <footer className="footer">
      <article className="details-footer gap-5 flex flex-row flex-wrap justify-around">
        <div className="w-96 pay-section flex flex-col">
          <h4 className="text-footer">Shop and pay safely</h4>
          <div className="flex flex-row flex-wrap conteiner-pay gap-4 mb-5">
            <img className="pay-img" src="/assets/icons/paypal-fill.png" alt="pay" />
            <img className="pay-img" src="/assets/icons/visa-line.png" alt="pay" />
            <img className="pay-img american" src="/assets/icons/american.png" alt="pay" />
            <img className="pay-img" src="/assets/icons/mastercard-fill.png" alt="pay" />
          </div>
          <p className="text-footer">
            Payment can be made safely and securely with PayPal, Credit Card or
            Bank Transfer.
          </p>
        </div>
        <div className="w-96 ">
          <h4 className="text-footer">Your Benefits</h4>
          <ul className="mt-3 flex gap-4 flex-col lista-check p-1">
            <li>3 Years Wifnix Warranty</li>
            <li>30-Day Money-Back Guarantee</li>
            <li>Repair Service</li>
            <li>Advice from our experts</li>
            <li>Satisfaction Guarantee</li>
            <li>Americas Largest Warehouse</li>
          </ul>
        </div>
        <div className="w-96 ">
          <h4 className="text-footer">Service</h4>
          <ul className="list-services flex flex-col mt-3 p-0 gap-4">
            <li>Shipping Costs and Delivery Times</li>
            <li>Help Centre</li>
            <li>Vouchers</li>
            <li>Contact us</li>
            <li>Walk-in Store</li>
            <li>Service Overview</li>
          </ul>
        </div>
      </article>
    </footer>
  );
}

export default SectionFooter;

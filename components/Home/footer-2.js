function SectionFooter2() {
  return (
    <article className="details-footer py-5 gap-5 flex flex-row flex-wrap justify-around content-start">
      <div className="m-auto w-96 ">
        <ul className="mt-5 flex flex-col p-0 gap-3 ul-list-2">
          <li>Terms & Conditions / Imprint</li>
          <li>Privacy Policy</li>
          <li>Cookie Settings</li>
          <li>Right of Withdrawal</li>
          <li>Online Ordering Process</li>
          <li>Statutory Warranty Rights</li>
        </ul>
      </div>
      <div className="m-auto w-96 flex flex-col justify-around text-left">
        <div className="flex flex-row icons-social gap-2">
          <img
            alt="icon"
            className="w-7"
            src="/assets/icons/facebook-circle-fill.png"
          />
          <img
            alt="icon"
            className="w-7"
            src="/assets/icons/youtube-fill.png"
          />
          <img
            alt="icon"
            className="w-7"
            src="/assets/icons/instagram-line.png"
          />
          <img
            alt="icon"
            className="w-7"
            src="/assets/icons/twitter-fill.png"
          />
          <img
            alt="icon"
            className="w-7"
            src="/assets/icons/pinterest-fill.png"
          />
          <img
            alt="icon"
            className="american w-7"
            src="/assets/icons/tik-tok.png"
          />
        </div>
        <div>
          <ul className="ul-list-2 p-0 flex flex-col gap-2">
            <li>About Us</li>
            <li>Jobs & Careers</li>
            <li>Blog</li>
            <li>Classified Ads</li>
          </ul>
        </div>
      </div>
      <div className="m-auto w-96 flex flex-col lg:flex-row">
        <img
          alt="icon"
          className="w-48 md:w-44 h-20"
          src="/assets/playstore.png"
        />
        <img
          alt="icon"
          className="w-48 md:w-44 h-20"
          src="/assets/appstore.png"
        />
      </div>
    </article>
  );
}

export default SectionFooter2;

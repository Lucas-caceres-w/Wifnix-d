import Buton from "../Home/buttonsocial";

function SocialMedia(props) {
  return (
    <div className="social-section">
      <h2
        style={{ fontSize: "32px", wordSpacing: "4px" }}
        className="title-section"
      >
        {(props.text && props.text) || `Do you like what you're seeing?`}
      </h2>
      <div className="flex flex-col justify-around gap-5 mt-5 m-auto text-center w-8/12 sm:flex-row flex-wrap">
        <Buton src="/assets/icons/facebook-circle-fill.png" name="Compartir" />
        <Buton src="/assets/icons/chat.svg" name="Twitter" />
        <Buton src="/assets/icons/mail-line.svg" name="E-mail" />
        <Buton src="/assets/icons/twitter-fill.png" name="Give Feedback" />
      </div>
    </div>
  );
}

export default SocialMedia;

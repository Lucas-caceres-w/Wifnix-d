function Buton(props) {
  return (
    <div className="boton-social">
      <a className="a-social" href="#">
        <img className="w-6" src={props.src}/>
        {props.name}
      </a>
    </div>
  );
}

export default Buton;

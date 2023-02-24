import Image from "next/image";
import Link from "next/link";

function Categoria(props) {
  return (
    <article className="flex flex-row gap-1 items-center">
      <Image width={"100"} height={"60"} src={props.src} alt="img" />
      <Link href={`/tienda?categorie=${props.path}`} className="link-categorie">
        {props.categoria}
      </Link>
    </article>
  );
}

export default Categoria;

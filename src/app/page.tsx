import MainCarousel from "@/components/MainCarousel";
import { Container } from "reactstrap";
import image from "../../public/banner-placeholder.png";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div
        style={{
          backgroundImage: `url(${image.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Container
          className="text-center d-flex flex-column justify-content-center align-items-center"
          style={{
            height: "calc(100vh - 56px)",
          }}
        >
          <h1 className="display-1">Tudo o que você gosta está aqui</h1>
          <h5>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            egestas in arcu ac feugiat.
          </h5>
          <Link href="/products">
            <button className="btn btn-dark mt-5">
              Conheça nossos Produtos
            </button>
          </Link>
        </Container>
      </div>
      <MainCarousel />
    </main>
  );
}

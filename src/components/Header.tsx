import Link from "next/link";
import { Nav, Navbar } from "reactstrap";

export default function Header() {
  return (
    <Navbar color="dark" dark container="md">
      <Link className="navbar-brand" href="/">
        Início
      </Link>
      <Nav className="flex-row" navbar>
        <Link className="nav-link" href="/products">
          Produtos
        </Link>
        <Link className="nav-link ms-3" href="/cart">
          Carrinho
        </Link>
      </Nav>
    </Navbar>
  );
}

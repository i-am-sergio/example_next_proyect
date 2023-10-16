import Link from "next/link";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="py-5 navbar">
      <Link href="/">
        <h1 className="text-3xl font-bold">Next Js Example</h1>
      </Link>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/tienda">Tienda</Link>
        </li>
        <li>
          <Link href="/posts">Posts</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

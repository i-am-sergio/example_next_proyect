import Link from "next/link";

function Navbar() {
  return (
    <nav>
      <h1>Navbar</h1>
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
    </nav>
  );
}

export default Navbar;

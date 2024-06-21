import Link from "next/link";

function Navbar() {
  return (
    <div className="shadow-lg hover:shadow-2xl">
      <div className="flex items-center justify-between py-7 max-w-7xl mx-auto mb-5">
        <div className="navbar-start">
          <Link href="/" className="text-2xl ">
            MyMarket
          </Link>
        </div>
        <div className="flex gap-3">
          <Link className="text-lg" href="/about">About</Link>
          <Link className="text-lg" href="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

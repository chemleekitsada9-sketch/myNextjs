import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <nav>
          <div className="logo">
            <Link href="/">
              <Image
                src="/logo.png"
                width={100}
                height={200}
                alt="logo"
                priority
              />
            </Link>
          </div>
          <div className="Link-navbar">
            <Link href="/">หน้าแรก</Link>
            <Link href="/about">เกี่ยวกับเรา</Link>
            <Link href="/products">สินค้า</Link>
          </div>
      </nav>
    </>
  );
}

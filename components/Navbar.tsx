import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
    <nav>
      <div>
        <Image src="/logo.png" width={100} height={200} alt="logo" />
      </div>
      <ul>
        <li><Link href="/">หน้าแรก</Link></li>
        <li><Link href="/about">เกี่ยวกับเรา</Link></li>
        <li><Link href="/products">สินค้า</Link></li>
      </ul>
      </nav>
    </>
  );
}

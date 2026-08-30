import Image from "next/image";
import styles from "@/app/styles/Product.module.css";
import Link from "next/link";

// 1. เปลี่ยนชื่อเป็น getProducts และใส่ async ข้างหน้า
async function getProducts() {
  const res = await fetch("https://dummyjson.com/products?limit=12");
  const data = await res.json();

  // 2. return ข้อมูล array ออกไปตรงๆ
  return data.products;
}

// 3. ใส่ async หน้า Index ถึงจะใช้ await ข้างในได้
export default async function Index() {
  const products = await getProducts();

  return (
    <>
      <h1>สินค้าทั้งหมด | KitRuksiam</h1>
      <div className={styles.container}>
        {products.map((item: any) => (
          <div key={item.id}>
            <Link href={"/products/" + item.id}>
              <h2 className={styles.title}> {item.title}</h2>
              <Image
                src={item.thumbnail}
                alt={item.title}
                width={300}
                height={300}
                className={styles.image}
              />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

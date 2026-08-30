import styles from "@/app/styles/Home.module.css"
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>ยินดีต้อนรับสู่หน้าแรก</h1>
      <p>ยินดีต้อนรับส่ร้านเด็กชายกิต</p>
      <Link  href="/products" className={styles.btn} >ดูสินค้าทั้งหมด</Link>
    </main>
  );
}
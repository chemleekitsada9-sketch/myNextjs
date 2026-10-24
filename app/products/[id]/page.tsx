'use client'

import { useParams } from 'next/navigation'

// 1. เปลี่ยนชื่อเป็น getProducts และใส่ async ข้างหน้า
async function getStaticPage() {
  const res = await fetch("https://dummyjson.com/products?limit=12");
  const data = await res.json();
  const paths = data.products.map((item:any)=>{
    return{
        params:{id:String(item.id)}
    }
  })
  return{
    paths,
    fallback:false
  }


}


export default function ProductDetail() {
  const params = useParams()
  
  // params.id จะตรงกับชื่อโฟลเดอร์ [id] เช่น app/product/[id]/page.jsx
  const id = params?.id

  return (
    <>
      <h1>รหัสสินค้า : {id}</h1>
    </>
  )
}
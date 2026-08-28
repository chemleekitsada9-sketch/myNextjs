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
      <h1>สินค้า</h1>
      {products.map((item: any) => (
        <div key={item.id}> รหัสสินค้า : {item.id }  ชื่อสินค้า :{item.title} </div>
      ))}
    </>
  );
}
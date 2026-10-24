This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## โครงสร้างและหน้าที่ของไฟล์ในโปรเจกต์

โปรเจกต์นี้เป็นเว็บร้านค้าตัวอย่างที่สร้างด้วย Next.js App Router ใช้ React และ TypeScript โดยหน้ารายการสินค้าดึงข้อมูลจาก DummyJSON

### ไฟล์หลักและการตั้งค่า

- `app/layout.tsx` — Layout หลักของเว็บ ครอบทุกหน้าไว้ด้วย Navbar และ Footer พร้อมโหลด CSS ส่วนกลางจาก `app/globals.css`
- `app/globals.css` — กำหนดรูปแบบพื้นฐานที่ใช้ร่วมกันทั้งเว็บ เช่น สีพื้นหลัง ลิงก์ แถบนำทาง และ Footer
- `app/page.tsx` — หน้าแรกของเว็บไซต์ แสดงข้อความต้อนรับและลิงก์ไปยังหน้ารายการสินค้า
- `app/about/page.tsx` — หน้า “เกี่ยวกับเรา” ซึ่งปัจจุบันแสดงหัวข้อหน้าเป็นหลัก
- `app/products/page.tsx` — หน้ารายการสินค้า เรียกข้อมูลจาก `https://dummyjson.com/products?limit=12` แล้วแสดงชื่อและรูปสินค้า แต่ละรายการลิงก์ไปยังหน้ารายละเอียดตามรหัสสินค้า
- `app/products/[id]/page.tsx` — หน้าแบบ Dynamic Route สำหรับ URL เช่น `/products/1` อ่านค่า `id` จาก URL แล้วแสดงรหัสสินค้า ปัจจุบันยังไม่ได้ดึงหรือแสดงรายละเอียดสินค้าจริง แม้จะมีฟังก์ชัน `getStaticPage()` อยู่ แต่ฟังก์ชันนั้นยังไม่ได้ถูกเรียกใช้
- `components/Navbar.tsx` — แถบนำทางและโลโก้ มีลิงก์ไปหน้าแรก เกี่ยวกับเรา และสินค้า
- `components/Footer.tsx` — ส่วนท้ายเว็บที่แสดงข้อความลิขสิทธิ์
- `app/styles/Home.module.css` — CSS Module สำหรับจัดวางและตกแต่งเนื้อหา/ปุ่มในหน้าแรก
- `app/styles/Product.module.css` — CSS Module สำหรับจัดวางการ์ดสินค้า ชื่อสินค้า และรูปภาพในหน้ารายการสินค้า
- `app/styles/about.module.css` — CSS Module ที่เตรียมไว้สำหรับตกแต่งหน้าเกี่ยวกับเรา แต่ขณะนี้หน้า `app/about/page.tsx` ยังไม่ได้ import ไฟล์นี้
- `public/logo.png` — โลโก้ที่ Navbar แสดงผ่านพาธ `/logo.png`
- `public/about.png`, `public/product.png`, `public/shopping.jpg` — รูปภาพสแตติกที่เก็บไว้ให้หน้าเว็บเรียกใช้ผ่าน URL เช่น `/about.png`; ขณะนี้ยังไม่ถูกใช้งานในหน้าที่ตรวจพบ
- `package.json` — ระบุ dependencies และคำสั่งที่ใช้กับโปรเจกต์: `npm run dev` สำหรับพัฒนา, `npm run build` สำหรับ build, `npm run start` สำหรับรัน build และ `npm run lint` สำหรับตรวจ lint
- `package-lock.json` — ล็อกเวอร์ชัน dependencies ที่ติดตั้ง เพื่อให้ติดตั้งซ้ำได้ผลใกล้เคียงกัน
- `next.config.ts` — ตั้งค่า Next.js โดยอนุญาตให้ `next/image` โหลดรูปจาก `cdn.dummyjson.com` ซึ่งใช้กับภาพสินค้าจาก API
- `tsconfig.json` — ตั้งค่า TypeScript รวมถึง alias `@/*` ให้ import ไฟล์จากรากโปรเจกต์ได้ เช่น `@/components/Navbar`
- `eslint.config.mjs` — ตั้งค่ากฎ ESLint สำหรับ Next.js และ TypeScript พร้อมระบุไฟล์/โฟลเดอร์ที่ไม่ต้องตรวจ
- `postcss.config.mjs` — เชื่อม Tailwind CSS v4 เข้ากับกระบวนการแปลง CSS ผ่าน PostCSS
- `next-env.d.ts` — ไฟล์ประกาศชนิดข้อมูลที่ Next.js สร้าง/ดูแลให้อัตโนมัติ ไม่ควรแก้ไขเอง
- `.gitignore` — ระบุไฟล์ที่ไม่ควรส่งเข้า Git เช่น dependencies, build output, ไฟล์ environment และ log
- `AGENTS.md` — แนวทางสำหรับ AI agent ที่ทำงานกับโปรเจกต์ ระบุให้ตรวจเอกสาร Next.js ในเวอร์ชันที่ติดตั้งก่อนแก้โค้ด
- `CLAUDE.md` — อ้างอิงแนวทางจาก `AGENTS.md` เพื่อให้เครื่องมือ Claude ใช้กฎชุดเดียวกัน
- `README.md` — เอกสารแนะนำโปรเจกต์ วิธีเริ่มใช้งาน และหน้าที่ของไฟล์ต่าง ๆ

### ลำดับการทำงานโดยรวม

1. เมื่อเปิดเว็บ Next.js จะแสดงหน้า `app/page.tsx` และใช้ `app/layout.tsx` ครอบเนื้อหาด้วย Navbar และ Footer
2. ผู้ใช้กด “สินค้า” ใน Navbar หรือปุ่มบนหน้าแรก เพื่อไปที่ `/products`
3. หน้า `app/products/page.tsx` ขอข้อมูลสินค้า 12 รายการจาก DummyJSON แล้วแสดงเป็นรายการพร้อมภาพ
4. เมื่อกดสินค้า ระบบนำไปยัง `/products/[id]` ซึ่งตอนนี้แสดงเฉพาะรหัสจาก URL

> หมายเหตุ: การดึงข้อมูลสินค้าอาศัยการเชื่อมต่ออินเทอร์เน็ต และการแสดงภาพจาก DummyJSON ใช้การอนุญาตโดเมนใน `next.config.ts`

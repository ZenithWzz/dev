# Tailwind Login UI (Vue + TypeScript)

โปรเจ็กต์นี้เป็นหน้าเข้าสู่ระบบที่สร้างด้วย Vue, TypeScript และ Tailwind CSS โดยใช้ Vite เป็นตัวรัน dev server
และระบบ build

## การเริ่มต้นใช้งาน

```bash
npm install
npm run dev
```

เปิดเบราว์เซอร์ที่ `http://localhost:5173`

> ℹ️ หากพบข้อผิดพลาด `npm ERR! code E403` ระหว่าง `npm install` ให้ตรวจสอบว่าสามารถเข้าถึง
> `https://registry.npmjs.org/` ได้จากเครือข่ายของคุณ หรือทดลองตั้งค่า proxy/registry ขององค์กร
> ให้ถูกต้องก่อนรันคำสั่งอีกครั้ง หากไม่ได้ใช้งาน proxy ให้ลบการตั้งค่าที่เกี่ยวข้องด้วย
> `npm config delete proxy` และ `npm config delete https-proxy` แล้วลองรันคำสั่งใหม่อีกครั้ง

## การ build production

```bash
npm run build
```

ไฟล์ที่ build แล้วจะอยู่ในโฟลเดอร์ `dist`

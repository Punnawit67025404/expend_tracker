# 💰 Expense Tracker

คือเว็บแอปพลิเคชันสำหรับจดบันทึกรายรับ-รายจ่ายส่วนตัว ช่วยให้ผู้ใช้สามารถบันทึก แก้ไข ลบ และติดตามรายการใช้จ่ายได้อย่างง่ายดาย พร้อมระบบสรุปยอดและกราฟแสดงผลรายเดือน และสามารถใช้งานได้จริง

---

## ✨ ฟีเจอร์หลัก

### 📋 ระบบ CRUD

| ฟังก์ชัน | รายละเอียด |
|----------|------------|
| **Create** | บันทึกรายการใหม่ พร้อมระบุประเภท (รายรับ/รายจ่าย) และวันที่ |
| **Read** | ดูรายการทั้งหมดในหน้า Activity และสรุปยอดในหน้า Dashboard |
| **Update** | แก้ไขข้อมูลรายการ (ชื่อ, จำนวนเงิน, วันที่) |
| **Delete** | ลบรายการที่กรอกผิดได้ |

### 🔐 ระบบ Authentication
- 🔑 **Username/Password** — เข้าสู่ระบบด้วย username และรหัสผ่าน
- 🍪 **Cookie-based Session** — จดจำการเข้าสู่ระบบอัตโนมัติ 7 วัน
- 🚪 **Logout** — ออกจากระบบได้ทุกเมื่อ
- 🛡️ **Middleware Protection** — ป้องกันการเข้าถึงหน้าเว็บโดยไม่ได้ login

### 🎯 ฟีเจอร์เพิ่มเติม
- 📊 **Dashboard** — แสดงยอดรวม Account Balance, Income, Expense
- 📈 **Financial Chart** — กราฟแสดงรายรับ-รายจ่ายรายเดือนย้อนหลัง 6 เดือน
- 🟢🔴 **Toggle รายรับ/รายจ่าย** — แยกประเภทได้ชัดเจน ไม่ต้องพิมพ์ +/-
- 📅 **Recent Transactions** — แสดงรายการล่าสุดในหน้า Dashboard

---

## 🛠️ Tech Stack เครื่องมือที่ใช้

| ประเภท | เครื่องมือ |
|--------|-----------|
| **Framework** | Next.js 16 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **Database** | SQLite |
| **ORM** | Prisma |
| **Icons** | Lucide React |

---

## 🚀 วิธีติดตั้งและรัน

### 1. Clone โปรเจกต์
```bash
git clone <repo-url>
cd income-expense-tracker
```

### 2. ติดตั้ง dependencies
```bash
npm install
```

### 3. สร้างไฟล์ `.env`
```env
DATABASE_URL="file:./prisma/dev.db"
APP_USERNAME=your_username
APP_PASSWORD=your_password
```

### 4. สร้าง Database
```bash
npx prisma migrate dev
```

### 5. รัน server
```bash
npm run dev
```

เปิดเบราว์เซอร์ไปที่ `http://localhost:3000`

---

## 📁 โครงสร้างโปรเจกต์

```
src/app/
├── api/
│   ├── login/route.ts       # API เช็ค login
│   └── logout/route.ts      # API logout
├── components/
│   ├── FinancialChart.tsx   # กราฟรายรับ-รายจ่าย
│   ├── LayoutClient.tsx     # จัดการ Layout
│   ├── LogoutButton.tsx     # ปุ่ม Logout
│   └── Sidebar.tsx          # เมนูด้านซ้าย
├── create/page.tsx          # หน้าเพิ่มรายการ
├── edit/page.tsx            # หน้าแก้ไขรายการ
├── activity/page.tsx        # หน้าดูรายการทั้งหมด
├── login/page.tsx           # หน้า Login
├── actions.ts               # Server Actions
├── layout.tsx               # Layout หลัก
└── page.tsx                 # หน้า Dashboard
middleware.ts                # ป้องกัน route
```

---

## 👩‍💻 ผู้จัดทำ

นายปัณณวิชญ์ อินทปาน

น.ส.ปาริชาติ ขัติยศ

น.ส.จิตตินี สุดตา

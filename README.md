# Neobrutalism To-Do List (React)

Web Application สำหรับบริหารจัดการงาน (To-Do List)  
พัฒนาด้วย **React** โดยมุ่งเน้นโครงสร้างโค้ดที่ชัดเจน ประสบการณ์ผู้ใช้ที่ดี และสามารถนำไปต่อยอดได้ในโปรเจกต์จริง

## Live Demo
https://phraewchuthamat.github.io/Todo-List-React/

---

## Overview

โปรเจกต์นี้จัดทำขึ้นเพื่อแสดงความเข้าใจในการพัฒนา Frontend ด้วย React  
ครอบคลุมการจัดการ State, การออกแบบ UX และการเขียนโค้ดที่ดูแลรักษาได้ในระยะยาว  
พร้อมดีไซน์สไตล์ **Neobrutalism** ที่เน้นความชัดเจนและเรียบง่าย

---

## Key Features

- ระบบจัดการงานครบถ้วนตามหลัก CRUD (Create / Read / Update / Delete)
- บันทึกข้อมูลถาวรด้วย `localStorage` ข้อมูลไม่สูญหายเมื่อรีเฟรชหรือปิดเบราว์เซอร์
- ระบบตรวจสอบวันกำหนดส่ง (Due Date) ไม่ให้เลือกวันที่ย้อนหลัง
- ระบบยืนยันก่อนลบข้อมูล (Confirm Dialog) เพื่อลดความผิดพลาดจากผู้ใช้
- ส่วนติดต่อผู้ใช้เรียบง่าย ใช้งานสะดวก และตอบสนองต่อผู้ใช้

---

## Technology Stack

- **React 18** (Functional Components, Hooks)
- **Vite**
- **Tailwind CSS**
- **Custom Hooks** (`useLocalStorage`)

---
## User Manual

แอปพลิเคชันถูกออกแบบให้ใช้งานตามกระบวนการ **CRUD** อย่างเรียบง่าย

### Create
- คลิกปุ่ม **Add Task**
- กรอก Title, Description และ Due Date  
  (ระบบไม่อนุญาตให้เลือกวันที่ย้อนหลัง)
- กด **Add Task** เพื่อบันทึกข้อมูล

### Read
- หน้าหลักจะแสดงรายการงานทั้งหมด
- ระบบแสดงจำนวนงานที่ยังไม่เสร็จโดยอัตโนมัติ
- ข้อมูลถูกบันทึกไว้ในเครื่อง (localStorage)

### Update
- เปลี่ยนสถานะงานโดยคลิก Checkbox
- แก้ไขข้อมูลโดยคลิกไอคอน Pencil แล้วกด **Update Task**

### Delete
- คลิกไอคอน Trash ในรายการที่ต้องการลบ
- ระบบแสดงหน้าต่างยืนยันก่อนลบข้อมูล

---

## Installation

### 1. Clone โปรเจกต์จาก GitHub

เปิด Terminal หรือ Command Prompt แล้วใช้คำสั่ง:

```bash
git clone https://github.com/phraewchuthamat/Todo-List-React.git
```

### 2. เข้าสู่โฟลเดอร์
```bash
cd Todo-List-React
```

### 3. ติดตั้ง dependencies
```bash
npm install
```

### 4. รันโปรเจ็ค
```bash
npm run dev
```

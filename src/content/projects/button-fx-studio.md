---
id: "button-fx-studio"
category: "plugins"
title:
  en: "Button FX Studio"
  th: "Button FX Studio"
description:
  en: "A professional Roblox Studio plugin to effortlessly add dynamic animations, particles, sound, and visual effects to UI buttons in one click without boilerplate code."
  th: "ปลั๊กอิน Roblox Studio ระดับโปรสำหรับใส่แอนิเมชัน แสง สี เสียง และเอฟเฟกต์สุดอลังการให้กับปุ่ม UI ได้ในคลิกเดียว โดยไม่ต้องเขียนโค้ดซ้ำซ้อนด้วยตัวเอง"
version: "1.0.0"
status: "released"
free: true
featured: true
image: "/images/button-fx-studio.jpg"
github: "https://github.com/padtanakran"
download: "https://github.com/padtanakran/kamirim-dev/raw/main/public/downloads/ButtonFXStudio.lua"
features:
  en:
    - "Hover FX: Scale Up with bouncy easing, Elevation Lift, Glow Border (UIStroke), Color Brighten, Tilt/Rotate"
    - "Click FX: Jelly Squish & Pop, Punch/Shift impact, Expanding Ripple Wave, Impact Shake, Flash Highlight, Sparkle Starburst, Comic Halftone Dots"
    - "Idle FX: Anime-style Manga Sunburst/Aura (4/6/8/12 rays), Heartbeat Pulse, Shimmer Sweep, Floating Bob, Jelly Wobble, Breathing Glow"
    - "Batch Apply: Select single or multiple buttons in Explorer and apply effects simultaneously in one click"
    - "Clean Removal: Dedicated Remove FX tool restores original button properties safely and completely"
    - "Zero Dependencies: Generates standalone, self-contained, high-performance Luau scripts"
    - "Theme Integration: Automatically matches Roblox Studio Dark and Light theme palettes"
    - "Full Undo / Redo safe integration with ChangeHistoryService"
  th:
    - "Hover FX: ขยายขนาดพร้อมเด้ง (Scale Up), ยกปุ่มลอยมีมิติ (Lift), ขอบเรืองแสง (Glow Border), ปรับความสว่าง (Brighten), เอียงหมุน (Tilt/Rotate)"
    - "Click FX: ปุ่มยุบตัวเด้งสไตล์เยลลี่ (Squish & Pop), กระแทกตามทิศทาง (Punch), คลื่นระลอกน้ำ (Ripple Wave), สั่นสะเทือน (Impact Shake), แฟลชแสงวาบ (Flash), ประกายดาว 4 แฉก (Sparkle Burst), คลื่นลายจุดมังงะ (Comic Dots)"
    - "Idle FX: ลำแสงรัศมีอนิเมะ (Manga Sunburst 4/6/8/12 แฉก), จังหวะชีพจร (Pulse/Heartbeat), แสงสะท้อนเลื่อนผ่าน (Shimmer Sweep), ลอยขึ้นลง (Floating Bob), ส่ายดุ๊กดิ๊ก (Jelly Wobble), ขอบเรืองแสงเป็นจังหวะ (Breathing Glow)"
    - "Batch Apply: เลือกหลายปุ่มใน Explorer แล้วกด Apply ได้พร้อมกันในคลิกเดียว"
    - "Clean Removal: มีระบบลบเอฟเฟกต์ออกจากปุ่มและคืนค่าดั้งเดิมได้หมดจด 100%"
    - "Standalone Runtime: สคริปต์ที่สร้างทำงานได้ทันทีแบบ Standalone ไม่ต้องติดตั้ง Library ภายนอก"
    - "Studio Theme Match: รองรับทั้ง Dark Theme และ Light Theme ของ Roblox Studio อัตโนมัติ"
    - "Full Undo/Redo: รองรับ History Service ของ Studio ย้อนกลับการกระทำได้สมบูรณ์แบบ"
installation:
  en: |
    1. Download the `ButtonFXStudio.lua` plugin script from the download button.
    2. Open Roblox Studio and open any place or project.
    3. Save the plugin file into your local Roblox Plugins folder or run it as a local plugin.
    4. The **Button FX** tab will appear on your top toolbar ready to use!
  th: |
    1. ดาวน์โหลดไฟล์ปลั๊กอิน `ButtonFXStudio.lua` จากปุ่มดาวน์โหลดด้านบน
    2. เปิด Roblox Studio และเปิดโปรเจกต์ของคุณ
    3. บันทึกไฟล์ปลั๊กอินลงในโฟลเดอร์ Plugins ของ Roblox Studio
    4. แถบเครื่องมือ **Button FX** จะปรากฏบนเมนู Toolbar ด้านบนพร้อมใช้งานทันที!
---

## Overview / ภาพรวม

**Button FX Studio** is a dedicated tool for Roblox developers and UI designers looking to elevate their game UI experience. With zero coding required, you can create juicy, responsive, and tactile UI buttons with custom animations, ambient idle effects, and reactive click feedback.

**Button FX Studio** เป็นเครื่องมือสำหรับนักพัฒนา Roblox และ UI Designer ที่ต้องการยกระดับความรู้สึกและสัมผัสในการกดปุ่ม UI ภายในเกม โดยไม่ต้องเขียนสคริปต์ซ้ำซ้อน สามารถสร้างปุ่มที่มีชีวิตชีวา มีเสียง แสง สี และแอนิเมชันตอบสนองได้อย่างนุ่มนวล

---

## Highlights

- **Juicy Tactile Feedback**: Transform flat, static buttons into responsive UI elements that players love interacting with.
- **Production-Ready Luau Code**: Clean generated code using TweenService, RunService, and modern Luau practices.
- **Customizable Parameters**: Fine-tune colors, easing styles, duration, damping, and intensity directly in Studio.

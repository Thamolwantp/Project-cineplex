import express from "express";  // ใช้ import แทน require
import cors from "cors";        // ใช้ import แทน require
import { getMovies } from "./test-db.js"; // นำเข้า getMovies จาก test-db.js

const app = express();
const PORT = 5000;

// เปิดใช้งาน CORS
app.use(cors());

// สร้าง API สำหรับดึงข้อมูลภาพยนตร์
app.get("/api/movies", async (req, res) => {
  try {
    const movies = await getMovies(); // เรียกฟังก์ชัน getMovies
    res.status(200).json(movies); // ส่งข้อมูลในรูปแบบ JSON กลับไปยัง frontend
  } catch (error) {
    console.error("Error fetching movies:", error);
    res.status(500).json({ error: "Failed to fetch movies" }); // ส่งสถานะ 500 พร้อมข้อความ error
  }
});

// เริ่มต้นเซิร์ฟเวอร์
app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});

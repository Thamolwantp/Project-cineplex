import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "kitsada9876",
  port: 5432,
});

// ฟังก์ชั่นในการดึงข้อมูลจากตาราง addmoive
async function getMovies() {
  const client = await pool.connect();  // ใช้การเชื่อมต่อ
  try {
    const result = await client.query(`
      SELECT addmoive_id, tag, title, category, "time", language, cinema, fdate, actor, director, resume, image_url, ldate, timer1, timer2, timer3
      FROM public.addmoive;
    `);
    console.log(result.rows);  // ดูผลลัพธ์ใน console
    return result.rows; // คืนค่าผลลัพธ์ที่ได้จากฐานข้อมูล
  } catch (err) {
    console.error("❌ Error fetching data:", err);
    return [];
  } finally {
    client.release();  // ปล่อยการเชื่อมต่อหลังจากเสร็จสิ้น
  }
}

async function testConnection() {
  try {
    const client = await pool.connect();
    console.log("✅ Database connected successfully!");
    client.release();
  } catch (err) {
    console.error("❌ Database connection error:", err);
  }
}

testConnection();

export { getMovies };  // ส่งออกฟังก์ชั่น getMovies เพื่อใช้ในไฟล์อื่น

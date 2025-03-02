'use client'; // สำหรับใช้ client-side code ใน Next.js 13+

import { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const TicketsStats = () => {
  const [stats, setStats] = useState([]);

  // ดึงข้อมูลจาก API
  useEffect(() => {
    const fetchStats = async () => {
        try {
          const response = await fetch('/api/tickets/stats');
          const data = await response.json();
      
          // แปลง `purchase_date` จาก ISO 8601 เป็นรูปแบบที่อ่านง่าย (yyyy-mm-dd)
          const fixedData = data.map(item => {
            // ตรวจสอบว่า purchase_date สามารถแปลงได้เป็นวันที่ไหม
            const date = new Date(item.purchase_date);
            const formattedDate = isNaN(date.getTime()) ? 'Invalid Date' : date.toLocaleDateString();
      
            return {
              purchase_date: formattedDate,  // ใช้วันที่ที่แปลงได้ หรือแสดง 'Invalid Date'
              tickets_sold: item.tickets_sold
            };
          });
      
          console.log(fixedData); // ตรวจสอบข้อมูลที่แปลงแล้ว
          setStats(fixedData);
        } catch (error) {
          console.error('Error fetching ticket stats:', error);
        }
      };
      

    fetchStats();
  }, []);

  return (
    <div className="mb-4">
      <h2 className="flex justify-center text-2xl font-semibold">Tickets purchased each day</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={stats}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="purchase_date" tickFormatter={(date) => date}/>
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="tickets_sold" stroke="#8884d8" />
            </LineChart>
        </ResponsiveContainer>
    </div>
  );
};

export default TicketsStats;

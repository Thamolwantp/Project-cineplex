"use client";

import Head from 'next/head';
import React, { useState } from 'react';
import './bill.css';

const StepProgressBar = () => {
  return (
    <div className="flex items-center justify-center w-full py-4 bg-gradient-to-b from-[#9D8527] to-[#D6BB56]">
      <div className="flex flex-col items-center">
        <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black text-black">1</div>
        <p className="text-black mt-2">เลือกรอบภาพยนตร์</p>
      </div>
      <div className="h-0.5 w-16 bg-gray-400 mx-2"></div>
      <div className="flex flex-col items-center">
        <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black text-black">2</div>
        <p className="text-black mt-2">เลือกที่นั่ง</p>
      </div>
      <div className="h-0.5 w-16 bg-gray-400 mx-2"></div>
      <div className="flex flex-col items-center">
        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white">3</div>
        <p className="text-black mt-2">ชำระเงิน</p>
      </div>
    </div>
  );
};

export default function Page() {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const handleDateClick = (date: string) => {
    setSelectedDate(date);
  };

  const handleTimeClick = (time: string) => {
    setSelectedTime(time);
  };

  return (
    <div className="container">
      <Head>
        <title>Buyticket</title>
      </Head>

      <StepProgressBar />
      
      <div className="header">
        <div className='secondheader'>
          <p className='header1'>สรุปรายการสั่งชื้อ</p>
          <p className='header2'>นับถอยหลัง:9.00</p>
        </div>
      </div>

      {/* Movie Poster Section */}
      <div className="posterSection">
        <div className="posterPlaceholder">
          <p>Movie Poster Here</p>
        </div>
        <div className="detailsSection">
          <h2>ธี่หยด</h2>
          <p>14 FEBRUARY 2024 | 11:30</p>
          <p>เวสตรา ซีนีเพล็กซ์ โลเคชั่น</p>
          <p>THEATER 1 |TH|TH</p>
          <p>ที่นั่ง</p>
          <p>ที่นั่งจำนวน</p>
        </div>
      </div>

      <div className="price">
        <h3>ราคารวมสุทธิ</h3>
        <p>160 THB</p>
      </div>

      <div className="commit">
        <h3>ยื่นยันการทำรายการ</h3>
        <form>
          <div className="inputGroup">
            <label>Email</label>
            <input type="text" placeholder="Enter your email" />
          </div>
          <div className="inputGroup">
            <label>phone</label>
            <input type="password" placeholder="Enter your phone" />
          </div>
          <button type="submit" className="submitButton">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

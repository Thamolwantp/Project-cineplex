"use client";

import Head from 'next/head';
import React, { useState } from 'react';
import './bill.css';
import StepProgressBar from "@/components/StepProgressBar";



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
    <>
    <StepProgressBar />
    <div className="container">
      <Head>
        <title>Buyticket</title>
      </Head>
      
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
    </>
  );
}

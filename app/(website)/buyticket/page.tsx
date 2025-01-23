"use client";

import Head from 'next/head';
import React, { useState } from 'react';
import './buyticket.css';

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

      <div className="header">
        <h1></h1>
      </div>

      {/* Movie Poster Section */}
      <div className="posterSection">
        <div className="posterPlaceholder">
          {/* ใส่รูปภาพของภาพยนตร์ที่นี่ */}
          <p>Movie Poster Here</p>
        </div>
        <div className="detailsSection">
        <h2>Movie Title</h2>
        <p>Director: Name Here</p>
        <p>Genre: Add Genre</p>
        <p>Duration: 110 mins</p>
        </div>
      </div>

      {/* Movie Details Section */}

      {/* Date and Time Section */}
      <div className="dateTimeSection">
        <h3>Select Date</h3>
        <div className="dateButtons">
            <button
              className={`dateButton1 ${selectedDate === '14' ? 'selected' : ''}`}
              onClick={() => handleDateClick('14')}
            >
            thu<br />14
            </button>
            <button className="dateButton2">.</button>
            <button
              className={`dateButton1 ${selectedDate === '15' ? 'selected' : ''}`}
              onClick={() => handleDateClick('15')}
            >
            fir<br/>15
            </button>
            <button
              className={`dateButton1 ${selectedDate === '16' ? 'selected' : ''}`}
              onClick={() => handleDateClick('16')}
            >
            sat<br />16
            </button>
            <button
              className={`dateButton1 ${selectedDate === '17' ? 'selected' : ''}`}
              onClick={() => handleDateClick('17')}
            >
            sun<br />17
            </button>
            <button
              className={`dateButton1 ${selectedDate === '18' ? 'selected' : ''}`}
              onClick={() => handleDateClick('18')}
            >
            mon<br />18
            </button>
            <button
              className={`dateButton1 ${selectedDate === '19' ? 'selected' : ''}`}
              onClick={() => handleDateClick('19')}
            >
            tue<br />19
            </button>
            <button
              className={`dateButton1 ${selectedDate === '20' ? 'selected' : ''}`}
              onClick={() => handleDateClick('20')}
            >
            wed<br />20
            </button>
            <button
              className={`dateButton1 ${selectedDate === '21' ? 'selected' : ''}`}
              onClick={() => handleDateClick('21')}
            >
            thu<br />21
            </button>
        </div>
      </div>

      {/* Time Slots Section */}
      <div className="timeSlotsSection">
        <h3>Select Time</h3>
        <div className="timeButtons">
            <button
              className={`timeButton1 ${selectedTime === '11.30' ? 'selected' : ''}`}
              onClick={() => handleTimeClick('11.30')}
            >
            11.30
            </button>
            <button
              className={`timeButton1 ${selectedTime === '15.30' ? 'selected' : ''}`}
              onClick={() => handleTimeClick('15.30')}
            >
            15.30
            </button>
            <button
              className={`timeButton1 ${selectedTime === '19.30' ? 'selected' : ''}`}
              onClick={() => handleTimeClick('19.30')}
            >
            19.30
            </button>
        </div>
      </div>

      {/* Confirm Button Section */}
      <div className="confirmSection">
        <button className="confirmButton">Confirm</button>
      </div>
    </div>
  );
}
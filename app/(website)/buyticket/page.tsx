"use client";

import Head from "next/head";
import React, { useState } from "react";
import "./buyticket.css";

const StepProgressBar = () => {
  return (
    <div className="flex items-center justify-center w-full py-4 bg-gradient-to-b from-[#9D8527] to-[#D6BB56]">
      {/* Step 1 */}
      <div className="flex flex-col items-center">
        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white">
          1
        </div>
        <p className="text-black mt-2">เลือกรอบภาพยนตร์</p>
      </div>

      {/* Line between steps */}
      <div className="h-0.5 w-16 bg-gray-400 mx-2"></div>

      {/* Step 2 */}
      <div className="flex flex-col items-center">
        <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black text-black">
          2
        </div>
        <p className="text-black mt-2">เลือกที่นั่ง</p>
      </div>

      {/* Line between steps */}
      <div className="h-0.5 w-16 bg-gray-400 mx-2"></div>

      {/* Step 3 */}
      <div className="flex flex-col items-center">
        <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black text-black">
          3
        </div>
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
    <>
      <Head>
        <title>Buy Ticket</title>
      </Head>

      {/* Step Progress Bar on Top */}
      <StepProgressBar />

      <div className="header">
        <h1>Buy Ticket</h1>
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

      {/* Date and Time Section */}
      <div className="dateTimeSection">
        <h3>Select Date</h3>
        <div className="dateButtons">
          <button
            className={`dateButton1 ${selectedDate === "14" ? "selected" : ""}`}
            onClick={() => handleDateClick("14")}
          >
            thu<br />14
          </button>
          <button className="dateButton2">.</button>
          <button
            className={`dateButton1 ${selectedDate === "15" ? "selected" : ""}`}
            onClick={() => handleDateClick("15")}
          >
            fri<br />15
          </button>
          <button
            className={`dateButton1 ${selectedDate === "16" ? "selected" : ""}`}
            onClick={() => handleDateClick("16")}
          >
            sat<br />16
          </button>
          <button
            className={`dateButton1 ${selectedDate === "17" ? "selected" : ""}`}
            onClick={() => handleDateClick("17")}
          >
            sun<br />17
          </button>
          <button
            className={`dateButton1 ${selectedDate === "18" ? "selected" : ""}`}
            onClick={() => handleDateClick("18")}
          >
            mon<br />18
          </button>
          <button
            className={`dateButton1 ${selectedDate === "19" ? "selected" : ""}`}
            onClick={() => handleDateClick("19")}
          >
            tue<br />19
          </button>
          <button
            className={`dateButton1 ${selectedDate === "20" ? "selected" : ""}`}
            onClick={() => handleDateClick("20")}
          >
            wed<br />20
          </button>
          <button
            className={`dateButton1 ${selectedDate === "21" ? "selected" : ""}`}
            onClick={() => handleDateClick("21")}
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
            className={`timeButton1 ${selectedTime === "11.30" ? "selected" : ""}`}
            onClick={() => handleTimeClick("11.30")}
          >
            11.30
          </button>
          <button
            className={`timeButton1 ${selectedTime === "15.30" ? "selected" : ""}`}
            onClick={() => handleTimeClick("15.30")}
          >
            15.30
          </button>
          <button
            className={`timeButton1 ${selectedTime === "19.30" ? "selected" : ""}`}
            onClick={() => handleTimeClick("19.30")}
          >
            19.30
          </button>
        </div>
      </div>

      {/* Confirm Button Section */}
      <div className="confirmSection">
        <button className="confirmButton">Confirm</button>
      </div>
    </>
  );
}

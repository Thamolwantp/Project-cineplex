"use client";

import React, { useState } from "react";

const MovieForm = () => {
  const [showtimes, setShowtimes] = useState([{ id: 1, time: "" }]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-900 to-black text-white p-8">
      <div className="max-w-4xl mx-auto bg-black bg-opacity-50 p-6 rounded-lg">
        <h1 className="text-xl font-bold mb-6">เพิ่มภาพยนตร์</h1>
        <form className="grid grid-cols-2 gap-6">
          {/* Left Section */}
          <div className="space-y-4 mb-6 flex flex-col items-center">
            <div className="w-64 h-80 bg-gray-700 flex items-center justify-center rounded mb-2">
              รูป
            </div>
            <button type="button" className="bg-gray-800 py-1 px-3 rounded mt-2">
              เพิ่มรูป
            </button>
          </div>

          {/* Right Section */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm">ชื่อเรื่อง</label>
              <input
                type="text"
                className="w-full bg-gray-800 text-white p-2 rounded border border-gray-700"
              />
            </div>
            <div>
              <label className="block text-sm">หมวดหมู่</label>
              <input
                type="text"
                className="w-full bg-gray-800 text-white p-2 rounded border border-gray-700"
              />
            </div>
            <div className="flex space-x-4">
              <div>
                <label className="block text-sm">เวลา</label>
                <input
                  type="number"
                  className="w-full bg-gray-800 text-white p-2 rounded border border-gray-700"
                />
              </div>
              <div>
                <label className="block text-sm">นาที</label>
                <input
                  type="text"
                  disabled
                  value="นาที"
                  className="w-full bg-gray-700 text-white p-2 rounded border border-gray-600"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm">แท็ก</label>
              <div className="flex space-x-4">
                <button type="button" className="bg-gray-800 py-1 px-3 rounded">
                  ยอดนิยม
                </button>
                <button type="button" className="bg-gray-800 py-1 px-3 rounded">
                  กำลังฉาย
                </button>
                <button type="button" className="bg-gray-800 py-1 px-3 rounded">
                  โปรแกรมหน้า
                </button>
              </div>
            </div>
          </div>

          <div className="col-span-2">
            <label className="block text-sm">โรงภาพยนตร์</label>
            <div className="space-y-2">
              <div className="flex items-center space-x-4">
                <label>
                  <input type="checkbox" className="mr-2" /> สาขา 1
                </label>
                <label>
                  <input type="checkbox" className="mr-2" /> สาขา 2
                </label>
              </div>
            </div>
          </div>

          <div className="col-span-2">
            <label className="block text-sm">วันที่ฉาย</label>
            <input
              type="date"
              className="w-full bg-gray-800 text-white p-2 rounded border border-gray-700"
            />
          </div>

          <div className="col-span-2">
            <label className="block text-sm">รอบฉาย (เวลา)</label>
            {showtimes.map((showtime, index) => (
              <div key={showtime.id} className="flex space-x-4 mb-2">
                <input
                  type="time"
                  className="bg-gray-800 text-white p-2 rounded border border-gray-700"
                />
              </div>
            ))}
          </div>

          <div className="col-span-2">
            <button
              type="submit"
              className="w-full bg-red-700 py-2 rounded font-bold text-white"
            >
              เพิ่มหนัง
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MovieForm;

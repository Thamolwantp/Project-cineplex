"use client"; // เพิ่มบรรทัดนี้

import Head from 'next/head';
import React, { useState } from 'react';
import './select.css';

export default function Page() {
  const [selectedRanks, setSelectedRanks] = useState<string[]>([]);

  const handleRankClick = (rank: string) => {
    // สลับสถานะการเลือก (ถ้าเลือกแล้วจะลบออก ถ้ายังไม่เลือกจะเพิ่มเข้าไป)
    setSelectedRanks((prevSelectedRanks) => 
      prevSelectedRanks.includes(rank)
        ? prevSelectedRanks.filter(r => r !== rank)  // ลบออกถ้าถูกเลือกแล้ว
        : [...prevSelectedRanks, rank]  // เพิ่มเข้าไปถ้ายังไม่ถูกเลือก
    );
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
          <p>Movie Poster Here</p>
        </div>
        <div className="detailsSection">
          <h2>Movie Title</h2>
          <p>Director: Name Here</p>
          <p>Genre: Add Genre</p>
          <p>Duration: 110 mins</p>
        </div>
      </div>

      <div className="namerank">
        <div className="ranking">
          <button
            className={`rankButton1 ${selectedRanks.includes('THEATER 1') ? 'selected' : ''}`}
            onClick={() => handleRankClick('THEATER 1')}
          >
            THEATER<br />1
          </button>
          <button
            className={`rankButton2 ${selectedRanks.includes('Normal') ? 'selected' : ''}`}
            onClick={() => handleRankClick('Normal')}
          >
            Normal<br />90 THB
          </button>
          {/*
          <button
            className={`rankButton2 ${selectedRanks.includes('Premium') ? 'selected' : ''}`}
            onClick={() => handleRankClick('Premium')}
          >
            Premium<br />160 THB
          </button>
          <button
            className={`rankButton3 ${selectedRanks.includes('Honeymoon') ? 'selected' : ''}`}
            onClick={() => handleRankClick('Honeymoon')}
          >
            Honeymoon<br />280 THB
          </button>
  */}
        </div>
      </div>

      <div>
        <div className="screen">
          <p>SCREEN</p>
        </div>
      </div>
        <div className='seat'>
            <div className='seatrank'>
                <p className='nameseatf'>Normal</p>
                <div className='seatonef'>
                    <button
                        className={`seatf ${selectedRanks.includes('F 1') ? 'selected' : ''}`}
                        onClick={() => handleRankClick('F 1')}
                    >
                    1
                    </button>
                    <button
                        className={`seatf ${selectedRanks.includes('F 2') ? 'selected' : ''}`}
                        onClick={() => handleRankClick('F 2')}
                    >
                    2
                    </button>
                    <button
                        className={`seatf ${selectedRanks.includes('F 3') ? 'selected' : ''}`}
                        onClick={() => handleRankClick('F 3')}
                    >
                    3
                    </button>
                    <button
                        className={`seatf ${selectedRanks.includes('F 4') ? 'selected' : ''}`}
                        onClick={() => handleRankClick('F 4')}
                    >
                    4
                    </button>
                    <button
                        className={`seatf ${selectedRanks.includes('F 5') ? 'selected' : ''}`}
                        onClick={() => handleRankClick('F 5')}
                    >
                    5
                    </button>
                    <button
                        className={`seatf ${selectedRanks.includes('F 6') ? 'selected' : ''}`}
                        onClick={() => handleRankClick('F 6')}
                    >
                    6
                    </button>
                    <button
                        className={`seatf ${selectedRanks.includes('F 7') ? 'selected' : ''}`}
                        onClick={() => handleRankClick('F 7')}
                    >
                    7
                    </button>
                    <button
                        className={`seatf ${selectedRanks.includes('F 8') ? 'selected' : ''}`}
                        onClick={() => handleRankClick('F 8')}
                    >
                    8
                    </button>
                    <button
                        className={`seatf ${selectedRanks.includes('F 9') ? 'selected' : ''}`}
                        onClick={() => handleRankClick('F 9')}
                    >
                    9
                    </button>
                    <button
                        className={`seatf ${selectedRanks.includes('F 10') ? 'selected' : ''}`}
                        onClick={() => handleRankClick('F 10')}
                    >
                    10
                    </button>
                    <button
                        className={`seatf ${selectedRanks.includes('F 11') ? 'selected' : ''}`}
                        onClick={() => handleRankClick('F 11')}
                    >
                    11
                    </button>
                    <button
                        className={`seatf ${selectedRanks.includes('F 12') ? 'selected' : ''}`}
                        onClick={() => handleRankClick('F 12')}
                    >
                    12
                    </button>
                </div>
            </div>
            <div className='seatrank'>
                <p className='nameseatf'>Normal</p>
                <div className='seatonef'>
                <button
                        className={`seatf ${selectedRanks.includes('F 13') ? 'selected' : ''}`}
                        onClick={() => handleRankClick('F 13')}
                    >
                    13
                    </button>
                    <button
                        className={`seatf ${selectedRanks.includes('F 14') ? 'selected' : ''}`}
                        onClick={() => handleRankClick('F 14')}
                    >
                    14
                    </button>
                    <button
                        className={`seatf ${selectedRanks.includes('F 15') ? 'selected' : ''}`}
                        onClick={() => handleRankClick('F 15')}
                    >
                    15
                    </button>
                    <button
                        className={`seatf ${selectedRanks.includes('F 16') ? 'selected' : ''}`}
                        onClick={() => handleRankClick('F 16')}
                    >
                    16
                    </button>
                    <button
                        className={`seatf ${selectedRanks.includes('F 17') ? 'selected' : ''}`}
                        onClick={() => handleRankClick('F 17')}
                    >
                    17
                    </button>
                    <button
                        className={`seatf ${selectedRanks.includes('F 18') ? 'selected' : ''}`}
                        onClick={() => handleRankClick('F 18')}
                    >
                    18
                    </button>
                    <button
                        className={`seatf ${selectedRanks.includes('F 19') ? 'selected' : ''}`}
                        onClick={() => handleRankClick('F 19')}
                    >
                    19
                    </button>
                    <button
                        className={`seatf ${selectedRanks.includes('F 20') ? 'selected' : ''}`}
                        onClick={() => handleRankClick('F 20')}
                    >
                    20
                    </button>
                    <button
                        className={`seatf ${selectedRanks.includes('F 21') ? 'selected' : ''}`}
                        onClick={() => handleRankClick('F 21')}
                    >
                    21
                    </button>
                    <button
                        className={`seatf ${selectedRanks.includes('F 22') ? 'selected' : ''}`}
                        onClick={() => handleRankClick('F 22')}
                    >
                    22
                    </button>
                    <button
                        className={`seatf ${selectedRanks.includes('F 23') ? 'selected' : ''}`}
                        onClick={() => handleRankClick('F 23')}
                    >
                    23
                    </button>
                    <button
                        className={`seatf ${selectedRanks.includes('F 24') ? 'selected' : ''}`}
                        onClick={() => handleRankClick('F 24')}
                    >
                    24
                    </button>
                </div>
            </div>
            <div className='seatrank'>
                <p className='nameseatf'>Normal</p>
                <div className='seatonef'>
                <button
                        className={`seatf ${selectedRanks.includes('F 25') ? 'selected' : ''}`}
                        onClick={() => handleRankClick('F 25')}
                    >
                    25
                    </button>
                    <button
                        className={`seatf ${selectedRanks.includes('F 26') ? 'selected' : ''}`}
                        onClick={() => handleRankClick('F 26')}
                    >
                    26
                    </button>
                    <button
                        className={`seatf ${selectedRanks.includes('F 27') ? 'selected' : ''}`}
                        onClick={() => handleRankClick('F 27')}
                    >
                    27
                    </button>
                    <button
                        className={`seatf ${selectedRanks.includes('F 28') ? 'selected' : ''}`}
                        onClick={() => handleRankClick('F 28')}
                    >
                    28
                    </button>
                    <button
                        className={`seatf ${selectedRanks.includes('F 29') ? 'selected' : ''}`}
                        onClick={() => handleRankClick('F 29')}
                    >
                    29
                    </button>
                    <button
                        className={`seatf ${selectedRanks.includes('F 30') ? 'selected' : ''}`}
                        onClick={() => handleRankClick('F 30')}
                    >
                    30
                    </button>
                    <button
                        className={`seatf ${selectedRanks.includes('F 31') ? 'selected' : ''}`}
                        onClick={() => handleRankClick('F 31')}
                    >
                    31
                    </button>
                    <button
                        className={`seatf ${selectedRanks.includes('F 32') ? 'selected' : ''}`}
                        onClick={() => handleRankClick('F 32')}
                    >
                    32
                    </button>
                    <button
                        className={`seatf ${selectedRanks.includes('F 33') ? 'selected' : ''}`}
                        onClick={() => handleRankClick('F 33')}
                    >
                    33
                    </button>
                    <button
                        className={`seatf ${selectedRanks.includes('F 34') ? 'selected' : ''}`}
                        onClick={() => handleRankClick('F 34')}
                    >
                    34
                    </button>
                    <button
                        className={`seatf ${selectedRanks.includes('F 35') ? 'selected' : ''}`}
                        onClick={() => handleRankClick('F 35')}
                    >
                    35
                    </button>
                    <button
                        className={`seatf ${selectedRanks.includes('F 36') ? 'selected' : ''}`}
                        onClick={() => handleRankClick('F 36')}
                    >
                    36
                    </button>
                </div>
            </div>
            <div className='seatrank'>
                <p className='nameseatf'>Normal</p>
                <div className='seatonef'>
                <button
                        className={`seatf ${selectedRanks.includes('F 37') ? 'selected' : ''}`}
                        onClick={() => handleRankClick('F 37')}
                    >
                    37
                    </button>
                    <button
                        className={`seatf ${selectedRanks.includes('F 38') ? 'selected' : ''}`}
                        onClick={() => handleRankClick('F 38')}
                    >
                    38
                    </button>
                    <button
                        className={`seatf ${selectedRanks.includes('F 39') ? 'selected' : ''}`}
                        onClick={() => handleRankClick('F 39')}
                    >
                    39
                    </button>
                    <button
                        className={`seatf ${selectedRanks.includes('F 40') ? 'selected' : ''}`}
                        onClick={() => handleRankClick('F 40')}
                    >
                    40
                    </button>
                    <button
                        className={`seatf ${selectedRanks.includes('F 41') ? 'selected' : ''}`}
                        onClick={() => handleRankClick('F 41')}
                    >
                    41
                    </button>
                    <button
                        className={`seatf ${selectedRanks.includes('F 42') ? 'selected' : ''}`}
                        onClick={() => handleRankClick('F 42')}
                    >
                    42
                    </button>
                    <button
                        className={`seatf ${selectedRanks.includes('F 43') ? 'selected' : ''}`}
                        onClick={() => handleRankClick('F 43')}
                    >
                    43
                    </button>
                    <button
                        className={`seatf ${selectedRanks.includes('F 44') ? 'selected' : ''}`}
                        onClick={() => handleRankClick('F 44')}
                    >
                    44
                    </button>
                    <button
                        className={`seatf ${selectedRanks.includes('F 45') ? 'selected' : ''}`}
                        onClick={() => handleRankClick('F 45')}
                    >
                    45
                    </button>
                    <button
                        className={`seatf ${selectedRanks.includes('F 46') ? 'selected' : ''}`}
                        onClick={() => handleRankClick('F 46')}
                    >
                    46
                    </button>
                    <button
                        className={`seatf ${selectedRanks.includes('F 47') ? 'selected' : ''}`}
                        onClick={() => handleRankClick('F 47')}
                    >
                    47
                    </button>
                    <button
                        className={`seatf ${selectedRanks.includes('F 48') ? 'selected' : ''}`}
                        onClick={() => handleRankClick('F 48')}
                    >
                    48
                    </button>
                </div>
            </div>

        </div>
        <div>
            <div className="selectedseat">
                <div className='secondselectseat'>
                    <p className='selectedseat1'>Selected seat</p>
                    <p className='selectedseat2'>Normal 1</p>
                </div>
            </div>
            <div className="selectedseat">
                <div className='secondselectseat'>
                    <p className='selectedseat1'>Total price</p>
                    <p className='selectedseat2'>5</p>
                </div>
            </div>
            
        </div>

      <div className="confirmSection">
        <button className="confirmButton">Buy Ticker</button>
      </div>
    </div>
  );
}
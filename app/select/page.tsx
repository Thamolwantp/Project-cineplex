"use client";

import Head from "next/head";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import "./select.css";
import StepProgressBar from "@/components/StepProgressBar"; 

export default function Page() {
  const [selectedRanks, setSelectedRanks] = useState<string[]>([]);
  const router = useRouter();

  const handleRankClick = (rank: string) => {
    setSelectedRanks((prevSelectedRanks) =>
      prevSelectedRanks.includes(rank)
        ? prevSelectedRanks.filter((r) => r !== rank)
        : [...prevSelectedRanks, rank]
    );
  };

  useEffect(() => {
    const isMoviePage = sessionStorage.getItem("isMoviePage");

    if (isMoviePage === "true") {
      sessionStorage.setItem("isMoviePage", "false");
    } else {
      sessionStorage.setItem("isMoviePage", "true");
      window.location.reload();
    }
  }, []);

  const goToBillPage = () => {
    if (selectedRanks.length > 0) {
      const selectedSeats = selectedRanks.join(",");
      router.push(`/bill?seat=${selectedSeats}`);
    } else {
      alert("กรุณาเลือกที่นั่งก่อนทำการซื้อตั๋ว!");
    }
  };

  return (
    <>
      <StepProgressBar /> 
      <div className="container">
        <Head>
          <title></title>
        </Head>

        <div className="header">
          <h1>Select</h1>
        </div>

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
              className={`rankButton1 ${
                selectedRanks.includes("THEATER 1") ? "selected" : ""
              }`}
              onClick={() => handleRankClick("THEATER 1")}
            >
              THEATER<br />1
            </button>
            <button
              className={`rankButton2 ${
                selectedRanks.includes("Normal") ? "selected" : ""
              }`}
              onClick={() => handleRankClick("Normal")}
            >
              Normal<br />90 THB
            </button>
          </div>
        </div>

        <div className="screen">
          <p>SCREEN</p>
        </div>

        <div className="seat">
          {["A", "B", "C", "D"].map((row) => (
            <div key={row} className="seatrank">
              <p className="nameseatf">Row {row}</p>
              <div className="seatonef">
                {[...Array(12)].map((_, i) => (
                  <button
                    key={`${row}${i + 1}`}
                    className={`seatf ${
                      selectedRanks.includes(`${row} ${i + 1}`) ? "selected" : ""
                    }`}
                    onClick={() => handleRankClick(`${row} ${i + 1}`)}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="selectedseat">
          <div className="secondselectseat">
            <p className="selectedseat1">Selected seat</p>
            <p className="selectedseat2">{selectedRanks.join(", ") || "None"}</p>
          </div>
        </div>

        <div className="selectedseat">
          <div className="secondselectseat">
            <p className="selectedseat1">Total price</p>
            <p className="selectedseat2">{selectedRanks.length * 90} THB</p>
          </div>
        </div>

        <div className="confirmSection">
          <button className="confirmButton" onClick={goToBillPage}>
            Buy Ticket
          </button>
        </div>
      </div>
    </>
  );
}

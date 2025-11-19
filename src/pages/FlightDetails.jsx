// src/pages/FlightDetails.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import flightImg from "../assets/flight.jpg";

export default function FlightDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const flightData = [
    { id: 1, flightNo: "PK101", from: "Karachi", to: "Lahore", date: "2025-11-20", time: "08:00", price: 500, duration: "2h 30m", airline: "Pakistan Airlines" },
    { id: 2, flightNo: "PK202", from: "Islamabad", to: "Karachi", date: "2025-11-21", time: "12:30", price: 700, duration: "2h 45m", airline: "Air Blue" },
    { id: 3, flightNo: "PK303", from: "Lahore", to: "Islamabad", date: "2025-11-22", time: "15:00", price: 600, duration: "1h 30m", airline: "Serene Air" },
    { id: 4, flightNo: "PK404", from: "Karachi", to: "Islamabad", date: "2025-11-23", time: "20:00", price: 550, duration: "2h 40m", airline: "Pakistan Airlines" },
  ];

  const selectedFlight = flightData.find(f => f.id === parseInt(id));

  return (
    <div className="container py-5 mt-5">
      <h2 className="mb-4 text-center">Flight Details</h2>

      {selectedFlight && (
        <div className="card mb-4 shadow-sm">
          <img
            src={flightImg}
            alt="Flight"
            className="card-img-top"
            style={{ height: "250px", width: "100%", objectFit: "cover" }}
          />

          <div className="card-body">
            <h5 className="card-title">{selectedFlight.flightNo}</h5>

            <p><strong>From:</strong> {selectedFlight.from}</p>
            <p><strong>To:</strong> {selectedFlight.to}</p>
            <p><strong>Date:</strong> {selectedFlight.date}</p>
            <p><strong>Time:</strong> {selectedFlight.time}</p>
            <p><strong>Airline:</strong> {selectedFlight.airline}</p>
            <p><strong>Price:</strong> ${selectedFlight.price}</p>
            <p><strong>Duration:</strong> {selectedFlight.duration}</p>

            {/* BOOK NOW BUTTON → OPENS MODAL ON FLIGHTS PAGE */}
            <button
              className="btn btn-success w-100 mt-3"
              onClick={() =>
                navigate("/flights", {
                  state: { openBookingModal: true, selectedFlight }
                })
              }
            >
              Book Now
            </button>
          </div>
        </div>
      )}

      {/* ALL FLIGHTS TABLE */}
      <table className="table table-striped table-hover shadow-sm mt-4">
        <thead className="table-dark">
          <tr>
            <th>Flight No</th>
            <th>From</th>
            <th>To</th>
            <th>Date</th>
            <th>Time</th>
            <th>Airline</th>
            <th>Price ($)</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {flightData.map(flight => (
            <tr key={flight.id}>
              <td>{flight.flightNo}</td>
              <td>{flight.from}</td>
              <td>{flight.to}</td>
              <td>{flight.date}</td>
              <td>{flight.time}</td>
              <td>{flight.airline}</td>
              <td>{flight.price}</td>
              <td>{flight.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="text-center mt-4">
        <button className="btn btn-secondary" onClick={() => navigate(-1)}>
          Back to Flights
        </button>
      </div>
    </div>
  );
}

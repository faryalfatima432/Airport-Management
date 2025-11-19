// src/pages/Home.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

import Flights from "./Flights";
import heroImage from "../assets/hero.jpg";
import analyticsImg from "../assets/analytics.jpg";
import reportImg from "../assets/report.jpg";
import securityImg from "../assets/security.jpg";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const flightData = [
    { id: 1, flightNo: "PK101", from: "Karachi", to: "Lahore", date: "2025-11-17", time: "08:00", price: 500, duration: "2h 30m", airline: "Pakistan Airlines" },
    { id: 2, flightNo: "PK202", from: "Islamabad", to: "Karachi", date: "2025-11-21", time: "12:30", price: 700, duration: "2h 45m", airline: "Air Blue" },
    { id: 3, flightNo: "PK303", from: "Lahore", to: "Islamabad", date: "2025-11-22", time: "15:00", price: 600, duration: "1h 30m", airline: "Serene Air" },
    { id: 4, flightNo: "PK404", from: "Karachi", to: "Islamabad", date: "2025-11-23", time: "20:00", price: 550, duration: "2h 40m", airline: "Pakistan Airlines" },
  ];

  // Function to calculate status
  const getStatus = (flight) => {
    const flightDateTime = new Date(`${flight.date}T${flight.time}`);
    const now = new Date();
    return flightDateTime < now ? "Departed" : "Scheduled";
  };

  return (
    <div>
      {/* HERO SECTION */}
      <section
        className="text-white d-flex align-items-center"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${heroImage}) center/cover no-repeat`,
          height: "75vh",
        }}
      >
        <div className="container text-center">
          <h1 className="display-3 fw-bold mb-3" data-aos="fade-up" data-aos-delay="200">
            AeroGate Management System
          </h1>

          <p
            className="lead mb-4"
            style={{ maxWidth: "600px", margin: "0 auto" }}
            data-aos="fade-up"
            data-aos-delay="400"
          >
            A modern platform to manage flights, passengers, security, crew, and operations—All in one system.
          </p>

          <a
            href="#features"
            data-aos="zoom-in"
            data-aos-delay="600"
            className="btn btn-success btn-lg px-5 py-3 rounded-pill fw-bold shadow-lg"
          >
            Explore Features
          </a>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-5" data-aos="fade-up">
            Powerful Tools for Airport Operations
          </h2>

          <div className="row g-4 text-center">
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
              <div className="card h-100 shadow border-0 feature-card">
                <img src={analyticsImg} className="card-img-top rounded-top" alt="Analytics" />
                <div className="card-body">
                  <h5 className="fw-bold">Real-Time Analytics</h5>
                  <p className="text-muted">
                    Monitor passenger flow, crew activity, and operational stats in real time.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4" data-aos="fade-up" data-aos-delay="400">
              <div className="card h-100 shadow border-0 feature-card">
                <img src={reportImg} className="card-img-top rounded-top" alt="Reports" />
                <div className="card-body">
                  <h5 className="fw-bold">Automated Reports</h5>
                  <p className="text-muted">
                    Generate accurate operational, security, and performance reports in seconds.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4" data-aos="fade-up" data-aos-delay="600">
              <div className="card h-100 shadow border-0 feature-card">
                <img src={securityImg} className="card-img-top rounded-top" alt="Security" />
                <div className="card-body">
                  <h5 className="fw-bold">Advanced Security</h5>
                  <p className="text-muted">
                    Ensure passenger and staff safety with integrated security alert systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AVAILABLE FLIGHTS TABLE */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-4" data-aos="fade-up">
            Available Flights
          </h2>

          <div className="table-responsive" data-aos="fade-up" data-aos-delay="200">
            <table className="table table-striped table-hover shadow-sm">
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
                  <th>Status</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
  {flightData.map((flight) => {
    const status = getStatus(flight); 
    return (
      <tr key={flight.id}>
        <td>{flight.flightNo}</td>
        <td>{flight.from}</td>
        <td>{flight.to}</td>
        <td>{flight.date}</td>
        <td>{flight.time}</td>
        <td>{flight.airline}</td>
        <td>{flight.price}</td>
        <td>{flight.duration}</td>
        <td>
          <span className={`badge ${status === "Departed" ? "bg-danger" : "bg-success"}`}>
            {status}
          </span>
        </td>
        <td>
          <button
            className={`btn btn-info btn-sm ${status === "Departed" ? "disabled" : ""}`}
            onClick={() => {
              if (status === "Scheduled") {
                navigate("/flights"); // Redirect to Flights page
              }
            }}
          >
            Details
          </button>
        </td>
      </tr>
    );
  })}
</tbody>


            </table>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-5 bg-dark border-bottom text-white text-center ">
        <div className="container">
          <h2 className="fw-bold mb-3" data-aos="fade-up" data-aos-delay="200">
            Ready to Transform Your Airport?
          </h2>
          <p className="mb-4" data-aos="fade-up" data-aos-delay="400">
            Start managing flights and passengers with ease using the AMS platform.
          </p>
          <a
            href="/register"
            className="btn btn-light btn-lg px-5 py-3 rounded-pill shadow"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            Get Started Now
          </a>
        </div>
      </section>

      <style>
        {`
          .feature-card {
            transition: all 0.4s ease;
            border-radius: 15px;
          }
          .feature-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 30px rgba(0,0,0,0.2);
          }
        `}
      </style>
    </div>
  );
}

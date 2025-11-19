import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import flightImg from "../assets/flight.jpg";
import BookingModal from "../components/BookingModal";
import { useAuth } from "../contexts/AuthContext";

export default function Flights() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [modalFlight, setModalFlight] = useState(null);
  const [passengers, setPassengers] = useState(1);
  const [selectedSeats, setSelectedSeats] = useState([]);

  // Hardcoded flight data
  const flightData = [
    { id: 1, flightNo: "PK101", from: "Karachi", to: "Lahore", date: "2025-11-20", time: "08:00", price: 500, duration: "2h 30m", airline: "Pakistan Airlines" },
    { id: 2, flightNo: "PK202", from: "Islamabad", to: "Karachi", date: "2025-11-21", time: "12:30", price: 700, duration: "2h 45m", airline: "Air Blue" },
    { id: 3, flightNo: "PK303", from: "Lahore", to: "Islamabad", date: "2025-11-22", time: "15:00", price: 600, duration: "1h 30m", airline: "Serene Air" },
    { id: 4, flightNo: "PK404", from: "Karachi", to: "Islamabad", date: "2025-11-23", time: "20:00", price: 550, duration: "2h 40m", airline: "Pakistan Airlines" },
    { id: 4, flightNo: "PK404", from: "Karachi", to: "Islamabad", date: "2025-11-23", time: "20:00", price: 550, duration: "2h 40m", airline: "Pakistan Airlines" },
    { id: 4, flightNo: "PK404", from: "Karachi", to: "Islamabad", date: "2025-11-23", time: "20:00", price: 550, duration: "2h 40m", airline: "Pakistan Airlines" },
  ];

  const [displayResults, setDisplayResults] = useState(flightData);

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault();
    const filtered = flightData.filter(
      (f) =>
        (!from || f.from.toLowerCase().includes(from.toLowerCase())) &&
        (!to || f.to.toLowerCase().includes(to.toLowerCase())) &&
        (!date || f.date === date) &&
        (!departureTime || f.time.startsWith(departureTime))
    );
    setDisplayResults(filtered);
  };

  // Open booking modal
  const openModal = (flight) => {
    if (!isLoggedIn) {
      navigate(`/login?flight=${flight.id}`);
    } else {
      setModalFlight(flight);
      setPassengers(1);
      setSelectedSeats([]);
    }
  };

  return (
    <div>
      {/* HERO SECTION */}
      <section
        className="text-white text-center d-flex align-items-center"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${flightImg}) no-repeat center center`,
          backgroundSize: "cover",
          height: "75vh",
        }}
      >
        <div className="container" data-aos="fade-up">
          <h1 className="display-4 fw-bold">Book Your Flight</h1>
          <p className="lead">Fast, easy, and reliable flight booking.</p>
        </div>
      </section>

      {/* SEARCH FORM */}
      <section className="py-5">
        <div className="container">
          <div className="card shadow-sm p-4 mx-auto mb-5" style={{ maxWidth: "800px" }} data-aos="zoom-in">
            <h3 className="mb-4 text-center">Find Flights</h3>
            <form onSubmit={handleSearch}>
              <div className="row mb-3">
                <div className="col-md-3">
                  <label>From</label>
                  <input className="form-control" value={from} onChange={(e) => setFrom(e.target.value)} />
                </div>
                <div className="col-md-3">
                  <label>To</label>
                  <input className="form-control" value={to} onChange={(e) => setTo(e.target.value)} />
                </div>
                <div className="col-md-3">
                  <label>Date</label>
                  <input type="date" className="form-control" value={date} onChange={(e) => setDate(e.target.value)} />
                </div>
                <div className="col-md-3">
                  <label>Time</label>
                  <input type="time" className="form-control" value={departureTime} onChange={(e) => setDepartureTime(e.target.value)} />
                </div>
              </div>
              <div className="text-center">
                <button className="btn btn-success btn-lg">Search Flights</button>
              </div>
            </form>
          </div>

          {/* FLIGHT CARDS */}
          <div className="row">
            {displayResults.length > 0 ? (
              displayResults.map((flight) => (
                <div key={flight.id} className="col-md-6 col-lg-4 mb-4">
                  <div className="card h-100 shadow-sm">
                    <img src={flightImg} className="card-img-top" alt={flight.flightNo} />
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{flight.flightNo}</h5>
                      <p className="card-text mb-1"><strong>From:</strong> {flight.from}</p>
                      <p className="card-text mb-1"><strong>To:</strong> {flight.to}</p>
                      <p className="card-text mb-1"><strong>Date:</strong> {flight.date}</p>
                      <p className="card-text mb-1"><strong>Time:</strong> {flight.time}</p>
                      <p className="card-text mb-1"><strong>Price:</strong> ${flight.price}</p>
                      <div className="mt-auto d-flex justify-content-between">
                        <button
                          className="btn btn-success"
                          onClick={() => openModal(flight)}
                        >
                          Book Now
                        </button>
                        <button
                          className="btn btn-info"
                          onClick={() => navigate(`/flight/${flight.id}`)}
                        >
                          Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-12 text-center">
                <h5>No flights found</h5>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* MODAL */}
      {modalFlight && (
        <BookingModal
          flight={modalFlight}
          passengers={passengers}
          setPassengers={setPassengers}
          selectedSeats={selectedSeats}
          setSelectedSeats={setSelectedSeats}
          cancelBooking={() => setModalFlight(null)}
          confirmBooking={() => {
            alert(`Flight booked! Seats: ${selectedSeats.join(", ")}`);
            setModalFlight(null);
          }}
        />
      )}
    </div>
  );
}

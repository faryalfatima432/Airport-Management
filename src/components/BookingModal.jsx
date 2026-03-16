import React, { useEffect, useState } from "react";

export default function BookingModal({
  flight,
  passengers,
  setPassengers,
  selectedSeats,
  setSelectedSeats,
  cancelBooking,
  confirmBooking,
}) {
  const bookedSeats = ["A1", "B3", "C2"];
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true); // trigger animation
  }, []);

  const toggleSeat = (seat) => {
    if (bookedSeats.includes(seat)) return;

    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      if (selectedSeats.length < Number(passengers)) {
        setSelectedSeats([...selectedSeats, seat]);
      } else {
        alert(`You can only select ${passengers} seat(s)`);
      }
    }
  };

  const renderSeatGrid = () => {
    const rows = ["A", "B", "C", "D", "E", "F"];
    const cols = [1, 2, 3, 4, 5, 6];

    return (
      <div className="d-flex flex-column align-items-center">
        {rows.map((row) => (
          <div key={row} className="d-flex mb-2">
            {cols.map((col) => {
              const seat = `${row}${col}`;
              const booked = bookedSeats.includes(seat);
              const selected = selectedSeats.includes(seat);
              const bg = booked
                ? "bg-danger"
                : selected
                ? "bg-primary"
                : "bg-success";

              return (
                <div
                  key={seat}
                  className={`text-white mx-1 rounded d-flex align-items-center justify-content-center ${bg}`}
                  style={{
                    width: "40px",
                    height: "40px",
                    cursor: booked ? "not-allowed" : "pointer",
                    transition: "transform 0.2s",
                  }}
                  onClick={() => toggleSeat(seat)}
                  onMouseEnter={(e) => {
                    if (!booked) e.currentTarget.style.transform = "scale(1.1)";
                  }}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                >
                  {seat}
                </div>
              );
            })}
          </div>
        ))}
        <div className="mt-2 d-flex justify-content-between w-75">
          <span className="text-success">Available</span>
          <span className="text-primary">Selected</span>
          <span className="text-danger">Booked</span>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="position-fixed top-0 start-0 w-100 h-100"
        style={{
          backgroundColor: "rgba(0,0,0,0.5)",
          backdropFilter: "blur(4px)",
          zIndex: 1040,
          opacity: animate ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
        onClick={cancelBooking}
      ></div>

      {/* Modal */}
      <div
        className="position-fixed top-50 start-50"
        style={{
          zIndex: 1050,
          width: "90%",
          maxWidth: "700px",
          maxHeight: "90vh", // max height 90% of viewport
          overflowY: "auto", // enable vertical scroll if content exceeds height
          backgroundColor: "rgba(255,255,255,0.95)",
          borderRadius: "12px",
          boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
          transform: animate
            ? "translate(-50%, -50%) translateY(0)"
            : "translate(-50%, -50%) translateY(50px)",
          opacity: animate ? 1 : 0,
          transition: "opacity 0.3s ease, transform 0.3s ease",
        }}
      >
        <div className="p-4">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="fw-bold">Book {flight.flightNo}</h5>
            <button
              className="btn btn-outline-secondary btn-sm"
              onClick={cancelBooking}
            >
              ✖
            </button>
          </div>

          <div className="mb-3">
            <p>
              <strong>From:</strong> {flight.from}
            </p>
            <p>
              <strong>To:</strong> {flight.to}
            </p>
            <p>
              <strong>Date:</strong> {flight.date}
            </p>
            <p>
              <strong>Time:</strong> {flight.time}
            </p>
            <p>
              <strong>Price:</strong> ${flight.price}
            </p>
          </div>

          <div className="mb-3">
            <label className="form-label">Passengers</label>
            <input
              type="number"
              className="form-control"
              min="1"
              value={passengers}
              onChange={(e) => setPassengers(Number(e.target.value))}
            />
          </div>

          <div className="mb-3">
            <h6>Select Seats:</h6>
            {renderSeatGrid()}
          </div>

          <div className="d-flex justify-content-end">
            <button
              className="btn btn-secondary me-2"
              onClick={cancelBooking}
              style={{ transition: "transform 0.2s" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-2px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              Cancel
            </button>
            <button
              className="btn btn-primary"
              onClick={confirmBooking}
              style={{ transition: "transform 0.2s" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-2px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              Book
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

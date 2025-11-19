// src/pages/About.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import aboutImg from "../assets/hero.jpg"; // Main hero/about image
import teamImg1 from "../assets/team1.jpg";
import teamImg2 from "../assets/team2.jpg";
import teamImg3 from "../assets/team3.jpg";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div>
      {/* HERO SECTION */}
      <section
        className="text-white d-flex align-items-center"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${aboutImg}) center/cover no-repeat`,
          height: "75vh",
        }}
        data-aos="fade-down"
      >
        <div className="container text-center">
          <h1 className="display-4 fw-bold">About Airport Management</h1>
          <p className="lead mt-3">
            Efficient. Reliable. Streamlined. Your complete airport management solution.
          </p>
        </div>
      </section>

      {/* ABOUT INFO */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4" data-aos="fade-right">
              <img
                src={aboutImg}
                alt="About Airport"
                className="img-fluid rounded shadow hover-zoom"
              />
            </div>
            <div className="col-md-6" data-aos="fade-left">
              <h2 className="fw-bold mb-3">Who We Are</h2>
              <p>
                Our Airport Management System streamlines flight operations, bookings, and airport logistics. Combining advanced technology with a user-friendly interface, it ensures efficiency for passengers and staff alike.
              </p>
              <p>
                From flight scheduling to ticket booking and reporting, our platform provides seamless control and visibility for airport administrators and travelers.
              </p>
              <a href="/contact" className="btn btn-success mt-3 hover-btn">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="fw-bold mb-5" data-aos="fade-up">Our Key Features</h2>
          <div className="row">
            {[
              { icon: "bi bi-speedometer2", title: "Fast Booking", desc: "Instant flight search and ticket confirmation." },
              { icon: "bi bi-bar-chart-line", title: "Real-time Analytics", desc: "Monitor operations and revenue insights." },
              { icon: "bi bi-shield-lock", title: "Secure & Reliable", desc: "Protect passenger and flight data securely." },
            ].map((feature, idx) => (
              <div className="col-md-4 mb-4" key={idx} data-aos="fade-up" data-aos-delay={idx * 200}>
                <div className="p-4 shadow rounded bg-white h-100 hover-zoom">
                  <i className={`${feature.icon} display-4 text-primary mb-3`}></i>
                  <h5 className="fw-bold mb-2">{feature.title}</h5>
                  <p>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-5" data-aos="fade-up">Meet Our Team</h2>
          <div className="row justify-content-center">
            {[teamImg1, teamImg2, teamImg3].map((img, idx) => {
              const names = ["Faryal Fatima", "Ali Khan", "Sara Ahmed"];
              const roles = ["Project Manager", "Lead Developer", "UI/UX Designer"];
              return (
                <div className="col-md-4 mb-4" key={idx} data-aos="fade-up" data-aos-delay={idx * 200}>
                  <div className="card border-0 shadow hover-zoom">
                    <img src={img} className="card-img-top" alt={names[idx]} />
                    <div className="card-body">
                      <h5 className="card-title fw-bold">{names[idx]}</h5>
                      <p className="card-text">{roles[idx]}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-5 bg-dark text-white text-center border-bottom" data-aos="zoom-in">
        <div className="container">
          <h2 className="fw-bold mb-3">Ready to Book Your Flight?</h2>
          <p className="mb-4">
            Join thousands of satisfied passengers and streamline your airport experience.
          </p>
          <a href="/flights" className="btn btn-light btn-lg hover-btn">
            Book Now
          </a>
        </div>
      </section>

      {/* Custom Hover Effects */}
      <style>{`
        .hover-zoom:hover {
          transform: scale(1.05);
          transition: transform 0.4s ease-in-out;
        }
        .hover-btn:hover {
          transform: translateY(-3px);
          transition: transform 0.3s;
        }
      `}</style>
    </div>
  );
}

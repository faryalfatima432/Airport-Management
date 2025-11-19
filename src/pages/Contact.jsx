// src/pages/Contact.jsx
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import contactImg from "../assets/hero.jpg";

export default function Contact() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const validate = (name, value) => {
    let msg = "";

    if (name === "name") {
      if (!value.trim()) msg = "Name is required";
      else if (value.length < 3) msg = "Name must be at least 3 characters";
    }

    if (name === "email") {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value.trim()) msg = "Email is required";
      else if (!regex.test(value)) msg = "Invalid email format";
    }

    if (name === "subject") {
      if (!value.trim()) msg = "Subject is required";
      else if (value.length < 5) msg = "Subject must be minimum 5 characters";
    }

    if (name === "message") {
      if (!value.trim()) msg = "Message is required";
      else if (value.length < 10) msg = "Message must be at least 10 characters";
    }

    return msg;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });

    setErrors({
      ...errors,
      [name]: validate(name, value),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(form).forEach((key) => {
      const errorMsg = validate(key, form[key]);
      if (errorMsg) newErrors[key] = errorMsg;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    setSuccess("Your message has been successfully sent!");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const isFormValid =
    form.name &&
    form.email &&
    form.subject &&
    form.message &&
    Object.values(errors).every((err) => !err);

  return (
    <div>
      {/* HERO SECTION */}
      <section
        className="text-white d-flex align-items-center"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${contactImg}) center/cover no-repeat`,
          height: "70vh",
        }}
      >
        <div className="container text-center" data-aos="fade-up">
          <h1 className="display-4 fw-bold">Contact Us</h1>
          <p className="lead mt-2">We’re here to help you—anytime, anywhere.</p>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-md-8"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="card shadow p-4">
                <h3 className="mb-4 text-center fw-bold">Send Us a Message</h3>

                {success && <div className="alert alert-success">{success}</div>}

                <form onSubmit={handleSubmit}>
                  {/* Name */}
                  <div className="mb-3" data-aos="fade-up" data-aos-delay="250">
                    <label className="form-label">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      className={`form-control ${errors.name ? "is-invalid" : ""}`}
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                    />
                    {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                  </div>

                  {/* Email */}
                  <div className="mb-3" data-aos="fade-up" data-aos-delay="300">
                    <label className="form-label">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      className={`form-control ${errors.email ? "is-invalid" : ""}`}
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                  </div>

                  {/* Subject */}
                  <div className="mb-3" data-aos="fade-up" data-aos-delay="350">
                    <label className="form-label">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      className={`form-control ${errors.subject ? "is-invalid" : ""}`}
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Enter subject"
                    />
                    {errors.subject && <div className="invalid-feedback">{errors.subject}</div>}
                  </div>

                  {/* Message */}
                  <div className="mb-3" data-aos="fade-up" data-aos-delay="400">
                    <label className="form-label">Message</label>
                    <textarea
                      name="message"
                      rows="5"
                      className={`form-control ${errors.message ? "is-invalid" : ""}`}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Write your message..."
                    />
                    {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                  </div>

                  {/* Button */}
                  <button
                    type="submit"
                    disabled={!isFormValid}
                    className="btn btn-success w-100 py-2 fw-bold"
                    data-aos="fade-up"
                    data-aos-delay="450"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="py-5">
        <div className="container">
          <h3
            className="text-center mb-4 fw-bold"
            data-aos="fade-up"
          >
            Our Location
          </h3>
          <div
            className="shadow rounded overflow-hidden"
            style={{ height: "400px" }}
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <iframe
              title="Airport Map"
              src="https://www.google.com/maps/embed?pb=!1m18..."
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

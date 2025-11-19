import React, { useState } from "react";
import registerImg from "../assets/hero.jpg";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    cnic: "",
    dob: "",
    gender: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (!form.fname || !form.email || !form.password) {
      setError("Please fill all required fields.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.some((u) => u.email === form.email)) {
      setError("Email already registered!");
      return;
    }

    users.push(form);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration Successful!");
    navigate("/login");
  };

  return (
    <div
      className="container-fluid min-vh-100 mt-5 d-flex align-items-center justify-content-center"
      style={{
        background: `url(${registerImg}) center/cover no-repeat`,
      }}
    >
      <div
        className="row w-75 overflow-hidden"
        style={{
          backgroundColor: "rgba(255,255,255,0.85)",
          borderRadius: "10px",
          transition: "transform 0.3s, box-shadow 0.3s",
        }}
      >
        {/* LEFT - FORM */}
        <div
          className="col-md-6 p-5"
          style={{
            transition: "transform 0.3s, box-shadow 0.3s",
          }}
        >
          <h3 className="text-center mb-4">Register</h3>

          {error && <div className="alert alert-danger">{error}</div>}

          <form onSubmit={handleRegister}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label>First Name</label>
                <input
                  name="fname"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label>Last Name</label>
                <input
                  name="lname"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label>Email</label>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label>Phone</label>
                <input
                  name="phone"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label>CNIC</label>
                <input
                  name="cnic"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label>Date of Birth</label>
                <input
                  name="dob"
                  type="date"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label>Gender</label>
                <select
                  name="gender"
                  className="form-control"
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>

              <div className="col-md-12 mb-3">
                <label>Address</label>
                <textarea
                  name="address"
                  className="form-control"
                  rows="2"
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label>Password</label>
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label>Confirm Password</label>
                <input
                  name="confirmPassword"
                  type="password"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-12">
                <button
                  type="submit"
                  className="btn btn-success w-100 mt-2"
                  style={{
                    transition: "transform 0.2s, box-shadow 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "translateY(-2px)";
                    e.target.style.boxShadow = "0 4px 15px rgba(0,0,0,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow = "none";
                  }}
                >
                  Register
                </button>
              </div>

              <div className="col-md-12 text-center mt-3">
                <p>
                  Already have an account?{" "}
                  <span
                    className="text-primary"
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </span>
                </p>
              </div>
            </div>
          </form>
        </div>

        {/* RIGHT - IMAGE */}
        <div className="col-md-6 d-none d-md-block p-0">
          <img
            src={registerImg}
            alt="register"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "blur(2px)",
              transition: "transform 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </div>
      </div>
    </div>
  );
}

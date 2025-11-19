import React, { useState } from "react";
import loginImg from "../assets/hero.jpg";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const params = new URLSearchParams(location.search);
  const flightId = params.get("flight");

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const match = users.find((u) => u.email === email && u.password === password);

    if (!match) {
      setError("Invalid email or password");
      return;
    }

    login(email);

    if (flightId) navigate(`/flights?book=${flightId}`);
    else navigate("/flights");
  };

  return (
    <div
      className="container-fluid min-vh-100 mt-5 d-flex align-items-center justify-content-center"
      style={{
        background: `url(${loginImg}) center/cover no-repeat`,
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
          <h3 className="text-center mb-4">Login</h3>

          {error && <div className="alert alert-danger">{error}</div>}

          <form>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="button"
              className="btn btn-success w-100 mt-2"
              style={{ transition: "transform 0.2s, box-shadow 0.2s" }}
              onClick={handleLogin}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 4px 15px rgba(0,0,0,0.2)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "none";
              }}
            >
              Login
            </button>
          </form>

          {/* Register redirect link */}
          <div className="text-center mt-3">
            <p>
              Don't have an account?{" "}
              <span
                className="text-primary"
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/register")}
              >
                Register
              </span>
            </p>
          </div>
        </div>

        {/* RIGHT - IMAGE */}
        <div className="col-md-6 d-none d-md-block p-0">
          <img
            src={loginImg}
            alt="login"
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

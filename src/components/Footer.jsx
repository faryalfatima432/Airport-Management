export default function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-4 mt-1 border-top border-secondary">
      <div className="container">

        {/* Top Row */}
        <div className="row text-center text-md-start">

          {/* Brand */}
          <div className="col-md-4 mb-4">
            <h4 className="fw-bold">AEROGATE</h4>
            <p className="text-muted mt-2">
              Safe • Secure • Professional<br />
              Managing flights & operations smoothly.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 mb-4">
            <h6 className="fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-light text-decoration-none">Home</a></li>
              <li className="mb-2"><a href="#" className="text-light text-decoration-none">Flights</a></li>
              <li className="mb-2"><a href="#" className="text-light text-decoration-none">Booking</a></li>
              <li><a href="#" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold mb-3">Support</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-light text-decoration-none">Privacy Policy</a></li>
              <li className="mb-2"><a href="#" className="text-light text-decoration-none">Terms & Conditions</a></li>
              <li><a href="#" className="text-light text-decoration-none">Help Center</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold mb-3">Contact Us</h6>
            <p className=" mb-1">📍 Karachi, Pakistan</p>
            <p className=" mb-1">✉ support@airport.com</p>
            <p className="mb-1">☎ +92 300 1234567</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="text-center text-white pt-3 border-top border-secondary mt-4">
          <p className="mb-0 ">
            © {new Date().getFullYear()} Airport Management System — All Rights Reserved
          </p>
        </div>

      </div>
    </footer>
  );
}

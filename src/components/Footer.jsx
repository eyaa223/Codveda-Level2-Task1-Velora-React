
import { Link } from 'react-router';

function Footer() {
  return (
    <footer className="footer premium-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            VELORA
          </Link>

          <p>
            Contemporary fashion.
            <br />
            Timeless by design.
          </p>
        </div>

        <div className="footer-navigation">
          <h3>EXPLORE</h3>

          <Link to="/">Home</Link>
          <Link to="/about">Our Story</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-message">
          <h3>THE VELORA PHILOSOPHY</h3>
          <p>
            Discover a world where modern style
            meets effortless elegance.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 VELORA. All rights reserved.</span>
        <span>DESIGNED WITH INTENTION.</span>
      </div>
    </footer>
  );
}

export default Footer;

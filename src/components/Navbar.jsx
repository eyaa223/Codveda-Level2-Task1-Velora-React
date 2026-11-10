
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close mobile menu when clicking a link
  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Close mobile menu with Escape
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const getLinkClass = ({ isActive }) =>
    isActive ? 'nav-link active' : 'nav-link';

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        <NavLink
          to="/"
          className="logo"
          onClick={closeMenu}
        >
          VELORA
        </NavLink>

        <button
          type="button"
          className={`menu-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
        >
          <span />
          <span />
          <span />
        </button>

        <div
          id="primary-navigation"
          className={`nav-links ${menuOpen ? 'nav-open' : ''}`}
        >
          <NavLink
            to="/"
            end
            className={getLinkClass}
            onClick={closeMenu}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={getLinkClass}
            onClick={closeMenu}
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={getLinkClass}
            onClick={closeMenu}
          >
            Contact
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

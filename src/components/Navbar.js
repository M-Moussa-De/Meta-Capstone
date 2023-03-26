import { Link } from "react-router-dom";

function Navbar() {
    return (
      <header className="mb-6 py-3">
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link to="/" className="navbar-item">
                    <img src="imgs/logo.png"  alt="Logo" />
                </Link>

                <button to="" role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarToggle">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </button>
            </div>

            <div id="navbarToggle" className="navbar-menu">
                <div className="navbar-end">
                    <Link to="/" className="navbar-item has-text-weight-semibold">
                        Home
                    </Link>

                    <Link to="/about" className="navbar-item has-text-weight-semibold">
                        About
                    </Link>

                    <Link to="/contact" className="navbar-item has-text-weight-semibold">
                        Contact
                    </Link>
                </div>
              </div>
            </nav>
      </header>
    );
  }
  
  export default Navbar;
  
import "./header.css";

function Header() {
  return (
    <header className="bg-black">
      <nav className="navbar" id="home">
        <div className="container">
          <div className="navbar-left">
            <a className="navbar-brand" href="index.html">
              <img className="logo-dark" src="assets/img/logo.png" alt="logo" />
            </a>
          </div>
          <a
            href="#introduction"
            className="btn btn-md btn-theme text-white py-2 px-3 radius-5 text-capitalize"
          >
            Getting Started
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;

import logo from "../assets/imgs/logo.png";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <a className="navbar-brand" href="#">
          <div>
            <img src={logo} alt="Acme" className="d-inline-block align-text-top" />
            <div className="Gallery">
              gallery
              <div>
                <div className="Rectangle"></div>
                <div className="Rectangle-2"></div>
              </div>
            </div>
          </div>
        </a>
        <button type="button" className="Button-login btn btn-primary">
          LOGIN
        </button>
        <button type="button" className="Hamburguer-btn btn btn-primary">
          <div className="Line-1 mb-1"></div>
          <div className="Line-2 mb-1"></div>
          <div className="Line-3"></div>
        </button>
      </div>
    </nav>
  );
};

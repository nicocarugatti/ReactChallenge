import logoFooter from "../assets/imgs/logo-footer.png";

export const Footer = () => {
  return (
    <div className="Container-footer">
      <div className="Footer-1"></div>
      <div className="Footer-2">
        <div className="d-flex align-items-center justify-content-center h-100">
          <div className="Logo-footer d-flex align-items-end">
            <img src={logoFooter}></img>
            <div className="Gallery-footer">
              gallery
              <div className="Rectangle"></div>
              <div className="Rectangle-2"></div>
            </div>
          </div>
          <div className="Text">© All right reserved 2020</div>
        </div>
      </div>
    </div>
  );
};

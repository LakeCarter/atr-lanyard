import "./Footer.css"
import logo from "../../assets/atrLogo.png"

export const Footer = () =>{
    return(
        <footer className="home-footer">
          <img className="footer-logo" src={logo} />
          <div className="footer-contact">
            Contact: ATROutdoors@duckmail.com{" "}
          </div>
        </footer>
    )
}
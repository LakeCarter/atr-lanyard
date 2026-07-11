import { Link } from "react-router-dom"
import "./Nav.css"
import logo from "../../assets/atrLogo.png"

export const Nav = () => {
  return <>
    <div className="nav">
        <div className="nav-logo">
          {/* Logo */}
          <Link className="nav-link" to={"/"}>
            <img src={logo} className="nav-LogoImg"/>
            </Link>
        </div>
      <ul>
        {/* Create Lanyard */}
        <li className="nav-item">
            <Link className="nav-link" to={"/create-lanyard"}>Create Lanyard</Link>
        </li>
        {/* View all */}
        <li className="nav-item">
            <Link className="nav-link" to={"/view-all"}>View Others Creations</Link>
        </li>
      </ul>
    </div>
  </>
}
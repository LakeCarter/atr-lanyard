import { Link } from "react-router-dom"
import "./Nav.css"
import logo from "../../assets/atrLogo.png"
import { useEffect, useState } from "react"
import { getUserById } from "../../services/userService.js"

export const Nav = ({ currentUser }) => {
  const [userProfile, setUserProfile] = useState({})
  const [showDrop, setShowDrop] = useState(false)

  useEffect(() => {
    if (currentUser.id) {
      getUserById(currentUser?.id).then((userObj) => {
        setUserProfile(userObj)
      })
    }
  }, [currentUser])

  const toggleDrop = () =>{setShowDrop(!showDrop)}

  return (
    <>
      <div className="nav">
        <div className="nav-logo">
          {/* Logo */}
          <Link className="nav-link" to={"/"}>
            <img src={logo} className="nav-LogoImg" />
          </Link>
        </div>
        <ul className="nav-list">
          {/* Create Lanyard */}
          <li className="nav-item">
            <Link className="nav-link" to={"/create-lanyard"}>
              Create Lanyard
            </Link>
          </li>
          {/* View all */}
          <li className="nav-item">
            <Link className="nav-link" to={"/view-all"}>
              View Others Creations
            </Link>
          </li>
        </ul>
        {/* Profile Button - When pressed a menu will drop down to display the below profile options*/}
          <div className="nav-profile-menu">
            <button className="nav-profile-btn" onClick={toggleDrop} aria-haspopup="true"
        aria-expanded={showDrop}>
              <img className="nav-profile-img" src={userProfile.profileImg} />
            </button>
            <ul className="drop-menu" style={showDrop?({visibility:"visible", opacity:1, transform:"translateY(0)"}):({visibility:"hidden", opacity:0, transform:"translateY(-10px)"})}>
              {/* View Profile  */}
              <Link className="drop-link" to={`/profile/${currentUser.id}`}>
                <li className="drop-item">View Profile</li>
              </Link>
              {/* Favorites */}
              <Link className="drop-link" to={"/favorites"}>
                <li className="drop-item">Favorites</li>
              </Link>
              {/* Log out button */}
              {localStorage.getItem("atr_user") ? (
                <li className="drop-item navbar-logout">
                  <Link
                    className="drop-link"
                    to=""
                    onClick={() => {
                      localStorage.removeItem("atr_user")
                      navigate("/login", { replace: true })
                    }}
                  >
                    Logout
                  </Link>
                </li>
              ) : (
                ""
              )}
            </ul>
          </div>
      </div>
    </>
  )
}

import { Link } from "react-router-dom"
import "./Nav.css"
import logo from "../../assets/atrLogo.png"
import { useEffect, useState } from "react"
import { getUserById } from "../../services/userService.js"

export const Nav = ({currentUser}) => {

  const [userProfile,setUserProfile] = useState({})

  useEffect(()=>{
    if(currentUser.id){
    getUserById(currentUser?.id).then((userObj)=>{setUserProfile(userObj)})}
  }
    ,[currentUser])

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
        {/* Profile Button */}
        <div className="nav-profile-menu">
          <button className="nav-profile-btn">
            <img className="nav-profile-img" src={userProfile.profileImg}/>
          </button>
          <div className="drop-menu">
            <Link className="drop-link" to={`/profile/${currentUser.id}`}>
            <div className="drop-item">View Profile</div>
            </Link>
            <Link className="drop-link">
            <div className="drop-item">Favorites</div>
            </Link>
            <Link className="drop-link">
            <div className="drop-item">Logout</div>
            </Link>
          </div>
        </div>
      </ul>
    </div>
  </>
}
import { Link, useNavigate, useParams } from "react-router-dom"
import "./Profile.css"
import { useEffect, useState } from "react"
import { getUserById } from "../../services/userService.js"
import { getLanyardsByUserId } from "../../services/lanyardService.js"
import lanyardPlaceHolder from "../../assets/lanyardPlaceHolder.png"

export const Profile = ({currentUser}) => {
  const { userId } = useParams()
  const [openedProfile, setOpenedProfile] = useState({})
  const [userLanyards, setUserLanyards] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    getUserById(userId).then((userObj) => {
      setOpenedProfile(userObj)
    })
    getLanyardsByUserId(userId).then((lanyardArray) => {
      setUserLanyards(lanyardArray)
    })
  }, [userId])

  return (
    <div className="profile-container">
    {/* Check if user is the owner of the profile */}
      {parseInt(userId)===currentUser.id?(
      <button
        className="profile-edit"
        onClick={() => {
          navigate("edit")
        }}
      >
        Edit Profile
      </button>
      ):("")}
      <div className="profile-details">
        <img className="profile-img" src={openedProfile.profileImg} />
        <h2 className="profile-name">{openedProfile.name}</h2>
        <h2 className="profile-bio">{openedProfile.bio}</h2>
      </div>
      <div className="profile-lanyards">
        {userLanyards.map((lanyard) => {
          return (
            <Link
              className="lanyard-link"
              to={`/lanyard/${lanyard.id}`}
              key={lanyard.id}
            >
              <div className="lanyard-card">
                {/* image shown is just a place holder */}
                <img className="lanyard-img" src={lanyardPlaceHolder} />
                <div className="lanyard-name">{lanyard.name}</div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

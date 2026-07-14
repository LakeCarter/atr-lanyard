import { useNavigate, useParams } from "react-router-dom"
import "./EditProfile.css"
import { useEffect, useState } from "react"
import { getUserById, updateUserProfile } from "../../services/userService.js"

export const EditProfile = ({currentUser}) => {
  const { userId } = useParams()
  const [openedProfile, setOpenedProfile] = useState({})
  const [editedProfile, setEditedProfile] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    getUserById(userId).then((userObj) => {
      setOpenedProfile(userObj)
    })
  }, [userId])

  useEffect(() => {
    const profileClone = { ...openedProfile }
    setEditedProfile(openedProfile)
  }, [openedProfile])

  const handleChange = (event) => {
    const editClone = { ...editedProfile }
    editClone[event.target.name] = event.target.value
    setEditedProfile(editClone)
  }

  const handleSave = (event) => {
    event.preventDefault()
    updateUserProfile(editedProfile).then(navigate(`/profile/${userId}`))
  }

if(parseInt(userId)===currentUser.id){
  return (
    <div className="edit-container">
      <header className="page-header">Edit Profile</header>
      <form
        className="edit-form"
        onSubmit={(event) => {
          handleSave(event)
        }}
      >
        <button type="submit" className="edit-save">
          Save
        </button>
        <div className="profile-details">
          <img className="profile-img" src={editedProfile.profileImg} />
          <label className="edit-label">
            Image Url:
            <input
              type="text"
              className="edit-imgUrl"
              defaultValue={editedProfile.profileImg}
              name="profileImg"
              required
              onChange={(event) => {
                handleChange(event)
              }}
            />
          </label>
          <label className="edit-label">
            Name:
            <input
              type="text"
              className="edit-name"
              defaultValue={editedProfile.name}
              name="name"
              required
              onChange={(event) => {
                handleChange(event)
              }}
            />
          </label>
          <label className="edit-label">
            Bio:
            <input
              type="text"
              className="edit-bio"
              defaultValue={editedProfile.bio}
              name="bio"
              required
              onChange={(event) => {
                handleChange(event)
              }}
            />
          </label>
          <label className="edit-label">
            Email:
            <input
              type="text"
              className="edit-email"
              defaultValue={editedProfile.email}
              name="email"
              required
              onChange={(event) => {
                handleChange(event)
              }}
            />
          </label>
        </div>
      </form>
    </div>
  )
}
else return <div className="lost"> You're not supposed to be here</div>
}


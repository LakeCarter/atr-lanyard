import "./LanyardView.css"
import { Link, useNavigate, useParams } from "react-router-dom"
import placeHolder from "../../assets/lanyardPlaceHolder.png"
import { useEffect, useState } from "react"
import {
  deleteLanyard,
  getLanyardsById,
} from "../../services/lanyardService.js"
import {
  getLanyardLikes,
  postNewLike,
  removeLike,
} from "../../services/likeService.js"

export const LanyardView = ({ currentUser }) => {
  const navigate = useNavigate()
  const { lanyardId } = useParams()
  const [lanyard, setLanyard] = useState({})
  const [likes, setLikes] = useState([])
  const [alreadyLiked, setAlreadyLiked] = useState(false)
  const [userLike, setUserLike] = useState({})

  //Function to rerender the page
  const getAndSetLanyard = () => {
    getLanyardsById(lanyardId).then((lanyardArray) => {
      setLanyard(lanyardArray[0])
    })
    getLanyardLikes(lanyardId).then((likesArray) => {
      setLikes(likesArray)
    })
  }

  //Initial render
  useEffect(() => {
    getAndSetLanyard()
  }, [])

  //Handle like
  const handleLike = () => {
    if (!alreadyLiked) {
      const likeObj = {
        id: 0,
        userId: currentUser.id,
        lanyardId: lanyard.id,
      }
      postNewLike(likeObj).then(getAndSetLanyard())
    } else removeLike(userLike.id).then(getAndSetLanyard())
  }

  //check if current user has already liked the lanyard
  useEffect(() => {
    //checks if likes is empty.
    // If not check if the user has like the post.
    if (likes.length != 0) {
      for (const like of likes) {
        if (like.userId === currentUser.id) {
          setAlreadyLiked(true)
          setUserLike(like)
          break
        } else setAlreadyLiked(false)
        setUserLike([])
      }
    }
    // If empty set alreadyLike to false and set user like to empty array.
    else {
      setAlreadyLiked(false)
      setUserLike([])
    }
  }, [likes])

  const handleDelete = () => {
    deleteLanyard(lanyardId).then(navigate(`/profile/${currentUser.id}`))
  }

  return (
    <div className="view-container">
      <div className="lanyard-card">
        {/* Lanyard Card Place Holder */}
        <img className="lanyard-placeholder" src={placeHolder} />
        <h2 className="lanyard-name">{lanyard.name}</h2>
      </div>
      <div className="details-container">
        <Link className="profile-link" to={`/profile/${lanyard.userId}`}>
          <div className="CreatedBy">Created By: {lanyard.user?.name}</div>
        </Link>
        <div className="date">Created: {lanyard.dateCreated}</div>
        {/* Like button */}
        <div className="like-container">
          {currentUser.id != lanyard.userId ? (
            <button className="like-btn" onClick={handleLike}>
              Like
            </button>
          ) : (
            ""
          )}
          <div className="like-count">{likes.length}</div>
        </div>
      </div>
      {/* Owner options */}
      {currentUser.id != lanyard.userId ? (
        ""
      ) : (
        <div className="owner-options">
          <button
            className="edit-btn"
            onClick={() => {
              navigate("edit")
            }}
          >
            Edit
          </button>
          <button
            className="delete-btn"
            onClick={() => {
              handleDelete()
            }}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  )
}

import "./LanyardView.css"
import { useParams } from "react-router-dom"
import placeHolder from "../../assets/lanyardPlaceHolder.png"
import { useEffect, useState } from "react"
import { getLanyardsById } from "../../services/lanyardService.js"
import { getLanyardLikes, postNewLike } from "../../services/likeService.js"

export const LanyardView = ({ currentUser }) => {
  const { lanyardId } = useParams()
  const [lanyard, setLanyard] = useState({})
  const [likes, setLikes] = useState([])
  const [alreadyLiked, setAlreadyLiked] = useState(false)

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
    const likeObj = {
      id: 0,
      userId: currentUser.id,
      lanyardId: lanyard.id,
    }
    postNewLike(likeObj).then(getAndSetLanyard())
  }

  //check if current user has already liked the lanyard
  useEffect(()=>{
        for(const like of likes){
            console.log(like.id)
            if(like.userId === currentUser.id){
                setAlreadyLiked(true)
            }
        }
  },[likes])

  return (
    <div className="view-container">
      <div className="lanyard-card">
        {/* Lanyard Card Place Holder */}
        <img className="lanyard-placeholder" src={placeHolder} />
        <h2 className="lanyard-name">{lanyard.name}</h2>
      </div>
      <div className="details-container">
        <div className="CreatedBy">Created By: {lanyard.user?.name}</div>
        <div className="date">Created: {lanyard.dateCreated}</div>
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
    </div>
  )
}

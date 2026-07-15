import { useEffect, useState } from "react"
import "./Favorites.css"
import {
  getUsersLikedLanyards,
  removeLike,
} from "../../services/likeService.js"
import lanyardPlaceHolder from "../../assets/lanyardPlaceHolder.png"
import { Link } from "react-router-dom"

export const Favorites = ({ currentUser }) => {
  const [favLanyards, setFavLanyards] = useState([])

  const getAndSetLanyard = () => {
    getUsersLikedLanyards(currentUser.id).then((likeArray) => {
      setFavLanyards(likeArray)
    })
  }

  useEffect(() => {
    getAndSetLanyard()
  }, [currentUser])

  const handleRemoveLike = (event) => {
    event.preventDefault()
    removeLike(event.target.value).then(() => {
      getAndSetLanyard()
    })
  }

  return (
    <div className="fav-container">
      <header className="page-header">Favorites</header>
      {/* If the user has no favorites the following message will display  */}
      {favLanyards ? (
        <div className="nothingToDisplay">
          Here you can see the posts you have liked.
          <div className="nothingToDisplay">
            You do not have any... someone is picky
          </div>
        </div>
      ) : (
        ""
      )}
      {/* List of posts the user has liked  */}
      <div className="fav-list">
        {favLanyards.map((fav) => {
          return (
            <div className="fav-item" key={fav.lanyard.id}>
              <button
                className="bnt-removeLike"
                value={fav.id}
                onClick={(event) => {
                  handleRemoveLike(event)
                }}
              >
                Remove Like
              </button>
              <Link className="lanyard-link" to={`/lanyard/${fav.lanyard.id}`}>
                <div className="lanyard-card">
                  {/* image shown is just a place holder */}
                  <img className="lanyard-img" src={lanyardPlaceHolder} />
                  <div className="lanyard-name">{fav.lanyard.name}</div>
                </div>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

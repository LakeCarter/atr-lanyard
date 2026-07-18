import { useEffect, useState } from "react"
import "./Featured.css"
import { getAllLanyards, getFeatured } from "../../services/lanyardService.js"
import placeholder from "../../assets/lanyardPlaceHolder.png"
import { Link } from "react-router-dom"

export const Featured = () => {
  const [featured, setFeatured] = useState([])

  useEffect(() => {
    getFeatured().then((allArray) => {
      setFeatured(allArray)
    })
  }, [])

  return (
    <div className="featured-container">
        <h2 className="featured-label">Featured</h2>
        <div className="featured-list">
          {featured.map((lanyard) => {
            return (
              <Link
                className="lanyard-link"
                to={`/lanyard/${lanyard.id}`}
                key={lanyard.id}
              >
                <div className="lanyard-card">
                  {/* image shown is just a place holder */}
                  <img className="lanyard-img" src={placeholder} />
                  <div className="featured-name">{lanyard.name}</div>
                </div>
              </Link>
            )
          })}
        </div>
    </div>
  )
}

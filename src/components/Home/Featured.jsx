import { useEffect, useState } from "react"
import "./Featured.css"
import { getAllLanyards, getFeatured } from "../../services/lanyardService.js"
import placeholder from "../../assets/lanyardPlaceHolder.png"
import { Link } from "react-router-dom"
import { DisplayLanyard } from "../displayLanyard/DisplayLanyard.jsx"

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
                <div className="lanyard-card --viewStandard">
                  {/* image shown is just a place holder */}
                  <div className="lanyard-name">{lanyard.name}</div>
                  <DisplayLanyard lanyard={lanyard}/>
                </div>
              </Link>
            )
          })}
        </div>
    </div>
  )
}

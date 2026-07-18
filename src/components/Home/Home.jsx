import { Link } from "react-router-dom"
import "./Home.css"
import backgroundImg from "../../assets/pictures/img2.jpg"
import { Featured } from "./Featured.jsx"

export const Home = () => {
  return (
    <div className="home-main">
      {/* Main landing page */}
      <div className="home">
        <section className="imgContainer">
          <img className="backgroundPic" src={backgroundImg} />
        </section>
        <section className="main-content">
          <div className="home-greeting">At The Ready</div>
          <Link to={"create-lanyard"} className="home-create-link">
            <div className="home-create-container">
              <h2 className="home-create-text">Start Building Your Lanyard</h2>
            </div>
          </Link>
        </section>
      </div>
      {/* Scroll down screen */}
      <div className="home-lower">
        {/* Featured */}
        <Featured />
        <div className="home-quote">
          "The lazy do not roast any game, but the diligent feed on the riches
          of the hunt." — Proverbs 12:27
        </div>
      </div>
    </div>
  )
}

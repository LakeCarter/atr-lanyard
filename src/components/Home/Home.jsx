import { Link } from "react-router-dom"
import "./Home.css"

export const Home = () => {
  return (
    <div className="home-main">
      {/* Main landing page */}
      <div className="home">
        <div className="home-greeting">At The Ready</div>
        <Link to={"create-lanyard"} className="home-create-link">
          <div className="home-create-container">
            <h2 className="home-create-text">Start Building Your Lanyard</h2>
          </div>
        </Link>
      </div>
      {/* Scroll down screen */}
      <div className="home-lower">
        {/* Featured */}
        <div className="featured-container">
          <div>
            <h2 className="featured-label">Featured</h2>
            <div className="featured-list">
              {/* list 4 featured lanyards here */}
            </div>
          </div>
        </div>
        <div className="home-quote">
          "The lazy do not roast any game, but the diligent feed on the riches
          of the hunt." — Proverbs 12:27
        </div>
        {/* Footer */}
        <footer className="home-footer">
          <img src="src\assets\atrLogo.png" className="home-Logo" />
          <div className="footer-contact">
            Contact: ATROutdoors@duckmail.com{" "}
          </div>
        </footer>
      </div>
    </div>
  )
}

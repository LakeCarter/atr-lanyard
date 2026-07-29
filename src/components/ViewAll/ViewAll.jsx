import { useEffect, useState } from "react"
import { FilterBar } from "./FilterBar.jsx"
import "./ViewAll.css"
import { getAllLanyards } from "../../services/lanyardService.js"
import { SearchBar } from "./SearchBar.jsx"
import { Link } from "react-router-dom"
import { DisplayLanyard } from "../displayLanyard/DisplayLanyard.jsx"

export const ViewAll = () => {
  const [allLanyards, setAllLanyards] = useState([])
  const [filteredResults, setFilteredResults] = useState([])
  const [searchedResults, setSearchedResults] = useState([])

  useEffect(() => {
    getAllLanyards().then((allArray) => {
      setAllLanyards(allArray)
    })
  }, [])

  useEffect(() => {
    setSearchedResults(allLanyards)
  }, [allLanyards])

  useEffect(() => {
    setFilteredResults(searchedResults)
  }, [searchedResults])

  return (
    <div className="viewAll">
      <header className="page-header">All Lanyards Created</header>
      <div className="filterBar-container">
        <SearchBar
          allLanyards={allLanyards}
          setSearchedResults={setSearchedResults}
        />
        <FilterBar
          searchedResults={searchedResults}
          setFilteredResults={setFilteredResults}
        />
      </div>
      <div className="all-container">
        {filteredResults.map((lanyard) => {
          return (
            
            <Link
              className="lanyard-link"
              to={`/lanyard/${lanyard.id}`}
              key={lanyard.id}
            >
              <div className="lanyard-card --viewStandard">
                {/* image shown is just a place holder */}
                <h2 className="lanyard-name">{lanyard.name}</h2>
                <DisplayLanyard lanyard={lanyard}/>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

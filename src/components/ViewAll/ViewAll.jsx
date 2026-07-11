import { useEffect, useState } from "react"
import { FilterBar } from "./FilterBar.jsx"
import "./ViewAll.css"
import { getAllLanyards } from "../../services/lanyardService.js"
import { SearchBar } from "./SearchBar.jsx"
import { Link } from "react-router-dom"

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

  useEffect(()=>{
    setFilteredResults(searchedResults)
  },[searchedResults])

  return (
    <div className="ViewAll">
      <div className="filterBar-container">
      <FilterBar searchedResults={searchedResults} setFilteredResults={setFilteredResults} />
      <SearchBar allLanyards={allLanyards} setSearchedResults={setSearchedResults} />
      </div>
      <div className="all-container">
        {filteredResults.map((lanyard) => {
          return (
            <Link className="lanyard-link" to={`/lanyard/${lanyard.id}`} key={lanyard.id}>
            <div className="lanyard-card">
              {/* image shown is just a place holder */}
              <img
                className="lanyard-img"
                src="src\assets\lanyardPlaceHolder.png"
              />
              <div className="lanyard-name">{lanyard.name}</div>
            </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

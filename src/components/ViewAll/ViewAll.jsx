import { useEffect, useState } from "react"
import { FilterBar } from "./FilterBar.jsx"
import "./ViewAll.css"
import { getAllLanyards } from "../../services/lanyardService.js"

export const ViewAll = () => {
  const [allLanyards, setAllLanyards] = useState([])
  const [filteredResults, setFilteredResults] = useState([])

  useEffect(() => {
    getAllLanyards().then((allArray) => {
      setAllLanyards(allArray)
    })
  }, [])

  useEffect(() => {
    setFilteredResults(allLanyards)
  }, [allLanyards])

  return (
    <div className="ViewAll">
      <FilterBar allLanyards={allLanyards} setFilteredResults={setFilteredResults} />
      <div className="all-container">
        {filteredResults.map((lanyard) => {
          return (
            <div className="lanyard-card" key={lanyard.id}>
              {/* image shown is just a place holder */}
              <img
                className="lanyard-img"
                src="src\assets\lanyardPlaceHolder.png"
              />
              <div className="lanyard-name">{lanyard.name}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

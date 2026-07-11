import { useEffect, useState } from "react"
import {
  getBraidStyles,
  getNeckStyles,
  getNumberOfBraidsOptions,
} from "../../services/optionsService.js"

export const FilterBar = ({searchedResults, setFilteredResults}) => {
  const [allBraidStyles, setAllBraidStyles] = useState([])
  const [allDrops, setAllDrops] = useState([])
  const [allNeckStyles, setAllNeckStyles] = useState([])
  const [filterValues, setFilterValues] = useState({})

  useEffect(() => {
    getBraidStyles().then((braidArray) => {
      setAllBraidStyles(braidArray)
    })
    getNumberOfBraidsOptions().then((dropsArray) => {
      setAllDrops(dropsArray)
    })
    getNeckStyles().then((neckArray) => {
      setAllNeckStyles(neckArray)
    })
  }, [])

  //Function to return an bool if the base obj has the keys of the filter and those keys' value matches
  const objFilter =(base,filter)=>{
    return Object.keys(filter).every(
      (key) => base.hasOwnProperty(key) && base[key]===filter[key]
    )
  }

  useEffect(()=>{
    const foundResults = searchedResults.filter((lanyard)=>{
      if(objFilter(lanyard,filterValues)){
        console.log(objFilter(lanyard,filterValues))
        return lanyard
      }
    }
  )
  setFilteredResults(foundResults)
  },[filterValues])

  const handleFilterSelect = (event) =>{
    const filterCopy = {...filterValues}
    if(event.target.value != 0){
    filterCopy[event.target.name] = parseInt(event.target.value)}
    else (delete filterCopy[event.target.name])
    setFilterValues(filterCopy)
  }

  return (
    <div className="filter-bar">
      <button className="filter-toggle">Filter</button>
      {/* Filter by braid style */}
      <div className="filter-group">
        <label className="filter-label"> Braid Style
          <select className="filter-item" name="braidStyleId" onChange={(event)=>{handleFilterSelect(event)}}>
            <option value={0}>-Select-</option>
            {allBraidStyles.map((braidStyle) => {
              return (
                <option key={braidStyle.id} value={braidStyle.id}>
                  {braidStyle.name}
                </option>
              )
            })}
          </select>
        </label>
      </div>

      {/* Filter by number of drops */}
      <div className="filter-group">
        <label className="filter-label"> Number of drops
          <select className="filter-item" name="numberOfDropsId" onChange={(event)=>{handleFilterSelect(event)}}>
            <option value={0}>-Select-</option>
            {allDrops.map((drop) => {
              return (
                <option key={drop.id} value={drop.number}>
                  {drop.number}
                </option>
              )
            })}
          </select>
        </label>
      </div>

      {/* Filter by Neck Style */}
      <div className="filter-group">
        <label className="filter-label"> Neck Style
          <select className="filter-item" name="neckStyleId" onChange={(event)=>{handleFilterSelect(event)}}>
            <option value={0}>-Select-</option>
            {allNeckStyles.map((neckStyle) => {
              return (
                <option key={neckStyle.id} value={neckStyle.id}>
                  {neckStyle.name}
                </option>
              )
            })}
          </select>
        </label>
      </div>
    </div>
  )
}

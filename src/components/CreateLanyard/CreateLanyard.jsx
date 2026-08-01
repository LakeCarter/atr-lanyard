import "./CreateLanyard.css"
import { useEffect, useState } from "react"
import {
  getBraidStyles,
  getNeckStyles,
  getNumberOfBraidsOptions,
} from "../../services/optionsService.js"
import { saveNewLanyard } from "../../services/lanyardService.js"
import { useNavigate } from "react-router-dom"
import { DisplayLanyard } from "../DisplayLanyard/DisplayLanyard.jsx"
import { LanyardOptions } from "./LanyardOptions.jsx"
import ducks from "../../assets/ducks.png"


export const CreateLanyard = ({ currentUser }) => {
  const [braidStyles, setBraidStyles] = useState([])
  const [allNumberOfDrops, setAllNumberOfDrops] = useState([])
  const [neckStyles, setNeckStyles] = useState([])
  const [newLanyard, setNewLanyard] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    getBraidStyles().then((braidArray) => {
      setBraidStyles(braidArray)
    })
    getNumberOfBraidsOptions().then((dropArray) => {
      setAllNumberOfDrops(dropArray)
    })
    getNeckStyles().then((neckArray) => {
      setNeckStyles(neckArray)
    })
  }, [])

  // Set new lanyard defaults
  useEffect(() => {
    setNewLanyard({
      id: 0,
      userId: currentUser.id,
      dateCreated: "",
      braidStyleId: 1,
      numberOfDropsId: 2,
      neckStyleId: 2,
      qdDrop: false,
      primaryCordColor1: "#957c50",
      primaryCordColor2: "#957c50",
      primaryCordColor3: "#f9e1b8",
      neckRestColor1: "#957c50",
      neckRestColor2: "#6979ab",
      bridgeBraidColor1: "#173503",
      bridgeBraidColor2: "#d9d9d9",
      sideDropColor: "#5e6a94",
      mainDropColor: "#957c50",
      name: "",
      featured: false,
    })
  }, [currentUser])

  // Handle option selection
  const handleSelection = (event) => {
    const stateClone = { ...newLanyard }
    // Set todays date
    const d = new Date()
    const todaysDate = d.toLocaleDateString()
    stateClone.dateCreated = todaysDate
    //Set key value based on the name of the target event
    //checks if target value is a number.
    if (parseInt(event.target.value))
      stateClone[event.target.name] = parseInt(event.target.value)
    else stateClone[event.target.name] = event.target.value
    setNewLanyard(stateClone)
  }

  const handleSave = (event) => {
    event.preventDefault()
    saveNewLanyard(newLanyard).then(navigate(`/profile/${currentUser.id}`))
  }

  return (
    <form
      className="create-form"
      onSubmit={(event) => {
        handleSave(event)
      }}
    >
      <img className="background-ducks" src={ducks}/>
      <div className="preview-container">
        {/* Image that will display what is being created */}
        <div className="preview-window">
          <DisplayLanyard lanyard={newLanyard} />
        </div>
        <div className="create-name">
          <input
            type="text"
            className="name-input"
            name="name"
            placeholder="Lanyard Name"
            required
            onChange={(event) => {
              handleSelection(event)
            }}
          />
        </div>
      </div>

      {/* Lanyard options */}
      <LanyardOptions handleSelection={handleSelection} braidStyles={braidStyles} allNumberOfDrops={allNumberOfDrops} neckStyles={neckStyles} newLanyard={newLanyard}/>
    </form>
  )
}

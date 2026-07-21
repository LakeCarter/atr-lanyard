import "./CreateLanyard.css"
import { useEffect, useState } from "react"
import {
  getBraidStyles,
  getNeckStyles,
  getNumberOfBraidsOptions,
} from "../../services/optionsService.js"
import { saveNewLanyard } from "../../services/lanyardService.js"
import { useNavigate } from "react-router-dom"

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
      braidStyleId: 0,
      numberOfDropsId: 0,
      neckStyleId: 0,
      qdDrop: false,
      primaryCordColor1: "#000000",
      primaryCordColor2: "#000000",
      neckRestColor1: "#000000",
      neckRestColor2: "#000000",
      bridgeBraidColor1: "#000000",
      bridgeBraidColor2: "#000000",
      sideDropColor: "#000000",
      mainDropColor: "#000000",
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
      className="create"
      onSubmit={(event) => {
        handleSave(event)
      }}
    >
      <div className="preview-container">
        {/* Image that will display what is being created */}
        <img
          className="lanyard-preview"
          src="src\assets\lanyardPlaceHolder.png"
        />
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
      <div className="options-list">
        
        <div className="options-styles">
          {/* Braid style */}
          <div className="option-item">
            <label className="option-label">
              Braid Style:
              <select
                className="option-dropDown"
                name="braidStyleId"
                required
                onChange={(event) => {
                  handleSelection(event)
                }}
              >
                <option value={""}>-Select braid style-</option>
                {braidStyles.map((braid) => {
                  return (
                    <option value={braid.id} key={braid.id}>
                      {braid.name}
                    </option>
                  )
                })}
              </select>
            </label>
          </div>

          {/* Number of drops */}
          <div className="option-item">
            <label className="option-label">
              Number of drops:
              <select
                className="option-dropDown"
                name="numberOfDropsId"
                required
                onChange={(event) => {
                  handleSelection(event)
                }}
              >
                {allNumberOfDrops.map((dropOption) => {
                  return (
                    <option value={dropOption.id} key={dropOption.id}>
                      {dropOption.number}
                    </option>
                  )
                })}
              </select>
            </label>
          </div>

          {/* Neck rest style */}
          <div className="option-item">
            <label className="option-label">
              Neck reset style
              <select
                className="option-dropDown"
                name="neckStyleId"
                required
                onChange={(event) => {
                  handleSelection(event)
                }}
              >
                <option value={""}>-Select neck rest-</option>
                {neckStyles.map((neckStyle) => {
                  return (
                    <option value={neckStyle.id} key={neckStyle.id}>
                      {neckStyle.name}
                    </option>
                  )
                })}
              </select>
            </label>
          </div>

          {/* QD Drops */}
          <div className="option-item">
            <label className="option-label">
              Quick Detach Drops?:
              <input
                type="checkbox"
                className="option-checkbox"
                value={true}
                name="qdDrop"
                onChange={(event) => {
                  handleSelection(event)
                }}
              />
            </label>
          </div>
        </div>
        <div className="options-colors">
          {/* Primary Cord Color 1 */}
          <div className="option-item">
            <label className="option-label">
              {" "}
              Primary Cord Color 1
              <input
                type="color"
                name="primaryCordColor1"
                onChange={(event) => {
                  handleSelection(event)
                }}
              />
            </label>
          </div>

          {/* Primary Cord Color 2 */}
          <div className="option-item">
            <label className="option-label">
              {" "}
              Primary Cord Color 2
              <input
                type="color"
                name="primaryCordColor2"
                onChange={(event) => {
                  handleSelection(event)
                }}
              />
            </label>
          </div>

          {/* Neck rest Color 1 */}
          <div className="option-item">
            <label className="option-label">
              {" "}
              Neck rest Color 1
              <input
                type="color"
                name="neckRestColor1"
                onChange={(event) => {
                  handleSelection(event)
                }}
              />
            </label>
          </div>

          {/* Neck rest Color 2 */}
          <div className="option-item">
            <label className="option-label">
              {" "}
              Neck rest Color 2
              <input
                type="color"
                name="neckRestColor2"
                onChange={(event) => {
                  handleSelection(event)
                }}
              />
            </label>
          </div>

          {/* Bridge braid Color 1 */}
          <div className="option-item">
            <label className="option-label">
              {" "}
              Bridge braid Color 1
              <input
                type="color"
                name="bridgeBraidColor1"
                onChange={(event) => {
                  handleSelection(event)
                }}
              />
            </label>
          </div>

          {/* Bridge braid Color 2 */}
          <div className="option-item">
            <label className="option-label">
              {" "}
              Bridge braid Color 2
              <input
                type="color"
                name="bridgeBraidColor2"
                onChange={(event) => {
                  handleSelection(event)
                }}
              />
            </label>
          </div>

          {/* Side Drops Color */}
          <div className="option-item">
            <label className="option-label">
              {" "}
              Side Drops Color
              <input
                type="color"
                name="sideDropColor"
                onChange={(event) => {
                  handleSelection(event)
                }}
              />
            </label>
          </div>

          {/* Main Drops Color */}
          <div className="option-item">
            <label className="option-label">
              {" "}
              Main Drop Color
              <input
                type="color"
                name="mainDropColor"
                onChange={(event) => {
                  handleSelection(event)
                }}
              />
            </label>
          </div>
        {/* Save button */}
        <div className="save-btn">
          <button type="submit" className="save-btn">
            Save Lanyard
          </button>
        </div>
        </div>
      </div>
    </form>
  )
}

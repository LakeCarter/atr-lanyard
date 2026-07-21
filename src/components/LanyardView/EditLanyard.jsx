import "./EditLanyard.css"
import { useEffect, useState } from "react"
import {
  getBraidStyles,
  getNeckStyles,
  getNumberOfBraidsOptions,
} from "../../services/optionsService.js"
import {
  getLanyardsById,
  saveEditedLanyard,
} from "../../services/lanyardService.js"
import lanyardPreview from "../../assets/lanyardPlaceHolder.png"
import { useNavigate, useParams } from "react-router-dom"

export const EditLanyard = ({ currentUser }) => {
  const navigate = useNavigate()
  const { lanyardId } = useParams()
  const [lanyard, setLanyard] = useState({})
  const [braidStyles, setBraidStyles] = useState([])
  const [allNumberOfDrops, setAllNumberOfDrops] = useState([])
  const [neckStyles, setNeckStyles] = useState([])
  const [editedLanyard, setEditedLanyard] = useState({})

  useEffect(() => {
    getLanyardsById(lanyardId).then((lanyardObj) => {
      setLanyard(lanyardObj[0])
    })
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

  useEffect(() => {
    setEditedLanyard({
      id: lanyard.id,
      userId: lanyard.userId,
      dateCreated: lanyard.dateCreated,
      braidStyleId: lanyard.braidStyleId,
      numberOfDropsId: lanyard.numberOfDropsId,
      neckStyleId: lanyard.neckStyleId,
      qdDrop: lanyard.qdDrop,
      primaryCordColor1: lanyard.primaryCordColor1,
      primaryCordColor2: lanyard.primaryCordColor2,
      neckRestColor1: lanyard.neckRestColor1,
      neckRestColor2: lanyard.neckRestColor2,
      bridgeBraidColor1: lanyard.bridgeBraidColor1,
      bridgeBraidColor2: lanyard.bridgeBraidColor2,
      sideDropColor: lanyard.sideDropColor,
      mainDropColor: lanyard.mainDropColor,
      name: lanyard.name,
    })
  }, [lanyard])

  const handleSelection = (event) => {
    const stateClone = { ...editedLanyard }
    //Set key value based on the name of the target event
    if (parseInt(event.target.value))
      stateClone[event.target.name] = parseInt(event.target.value)
    else stateClone[event.target.name] = event.target.value
    setEditedLanyard(stateClone)
  }

  const handleSave = (event) => {
    event.preventDefault()
    saveEditedLanyard(editedLanyard).then(navigate(`/lanyard/${lanyard.id}`))
  }

  return (
    <form
      className="create"
      onSubmit={(event) => {
        handleSave(event)
      }}
    >
      <div className="preview-preview">
        {/* Image that will display what is being created */}
        <img className="lanyard-preview" src={lanyardPreview} />
        <div className="create-name">
          <input
            type="text"
            className="name-input"
            name="name"
            defaultValue={lanyard.name}
            placeholder="Lanyard Name"
            onChange={(event) => {
              handleSelection(event)
            }}
            required
          />
        </div>
      </div>

      {/* Lanyard options */}
      <div className="options-list">
        <div className="option-style">
          {/* Braid style */}
          <div className="option-item">
            <label className="option-label">
              Braid Style:
              <select
                className="option-dropDown"
                name="braidStyleId"
                value={editedLanyard.braidStyleId}
                onChange={(event) => {
                  handleSelection(event)
                }}
              >
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
                value={editedLanyard.numberOfDropsId}
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
                value={editedLanyard.neckStyleId}
                onChange={(event) => {
                  handleSelection(event)
                }}
              >
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
                defaultChecked={lanyard.qdDrop}
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
                defaultValue={lanyard.primaryCordColor1}
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
                defaultValue={lanyard.primaryCordColor2}
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
                defaultValue={lanyard.neckRestColor1}
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
                defaultValue={lanyard.neckRestColor2}
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
                defaultValue={lanyard.bridgeBraidColor1}
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
                defaultValue={lanyard.bridgeBraidColor2}
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
                defaultValue={lanyard.sideDropColor}
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
                defaultValue={lanyard.mainDropColor}
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

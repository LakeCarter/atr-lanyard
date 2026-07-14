export const LanyardOptions = ({handleSelection, braidStyles, allNumberOfDrops, neckStyles}) => {
  return (
    <form
      className="options-list"
      onSubmit={(event) => {
        handleSave(event)
      }}
    >
      {/* Braid style */}
      <div className="options-item">
        <label className="option-label">
          Braid Style:
          <select
            className="option-dropDown"
            name="braidStyleId"
            onChange={(event) => {
              handleSelection(event)
            }}
          >
            <option>-Select braid style-</option>
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
            onChange={(event) => {
              handleSelection(event)
            }}
          >
            <option>-Select neck rest-</option>
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
    </form>
  )
}

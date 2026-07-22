import "./DisplayLanyard.css"
import braid1 from "../../assets/lanyardAssets/prim1.PNG"
import braid2 from "../../assets/lanyardAssets/prim2.PNG"
import braid3 from "../../assets/lanyardAssets/prim3.PNG"
import neck1 from "../../assets/lanyardAssets/neck1.png"
import neck2 from "../../assets/lanyardAssets/neck2.png"
import bridge1 from "../../assets/lanyardAssets/bridge1.png"
import bridge2 from "../../assets/lanyardAssets/bridge2.png"
import drop1 from "../../assets/lanyardAssets/drop1.png"
import drop2 from "../../assets/lanyardAssets/drop2.png"
import drop3 from "../../assets/lanyardAssets/drop3.png"
import drop4 from "../../assets/lanyardAssets/drop4.png"
import mainDrop1 from "../../assets/lanyardAssets/mainDrop1.png"
import mainDrop2 from "../../assets/lanyardAssets/mainDrop2.png"
import { useEffect, useState } from "react"
import {
  getBraidStylesById,
  getNeckStylesById,
} from "../../services/optionsService.js"

export const DisplayLanyard = ({ newLanyard }) => {
  const [primaryCords, setPrimaryCords] = useState({})
  const [neckCords, setNeckCords] = useState({})

  useEffect(() => {
    getBraidStylesById(newLanyard.braidStyleId).then((styleObj) => {
      setPrimaryCords(styleObj[0])
    })
    getNeckStylesById(newLanyard.neckStyleId).then((neckObj) => {
      setNeckCords(neckObj[0])
    })
  }, [newLanyard])

  return (
    <div className="display-container">
      {/* main braid  */}
      {primaryCords?.images?.map((cordImg) => {
        return (
          <img
            className={`lanyard-part ${cordImg.name}`}
            key={cordImg.name}
            src={cordImg.img}
          />
        )
      })}

      {/* neck braid  */}
      {neckCords?.images?.map((cordImg) => {
        return (
          <img
            className={`lanyard-part ${cordImg.name}`}
            key={cordImg.name}
            src={cordImg.img}
          />
        )
      })}

      {/* side drops  */}
    </div>
  )
}

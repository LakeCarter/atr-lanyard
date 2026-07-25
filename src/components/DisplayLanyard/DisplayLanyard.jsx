import "./DisplayLanyard.css"
import bridge1 from "../../assets/lanyardAssets/bridge1.png"
import bridge2 from "../../assets/lanyardAssets/bridge2.png"
import mainDrop1 from "../../assets/lanyardAssets/mainDrop1.png"
import mainDrop2 from "../../assets/lanyardAssets/mainDrop2.png"
import { useEffect, useState } from "react"
import {
  getBraidStylesById,
  getNeckStylesById,
  getSideDropsById,
} from "../../services/optionsService.js"

export const DisplayLanyard = ({ newLanyard }) => {
  const [primaryCords, setPrimaryCords] = useState({})
  const [neckCords, setNeckCords] = useState({})
  const [sideDrops, setSideDrops] = useState({})

  useEffect(() => {
    getBraidStylesById(newLanyard.braidStyleId).then((styleObj) => {
      setPrimaryCords(styleObj[0])
    })
    getNeckStylesById(newLanyard.neckStyleId).then((neckObj) => {
      setNeckCords(neckObj[0])
    })
    getSideDropsById(newLanyard.numberOfDropsId).then((dropObj)=>{
      setSideDrops(dropObj[0])
    })
  }, [newLanyard])

  return (
    <div className="lanyard-box">
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
      <img
        className="lanyard-part sideDrops"
        src={sideDrops?.image}
        />

      {/* Bridge  */}
      <img 
        className="lanyard-part bridge1"
        src={bridge1}/>
      <img 
        className="lanyard-part bridge2"
        src={bridge2}/>

      {/* Main drops */}
      <img
        className="lanyard-part mainDrop1"
        src={mainDrop1}/>
      <img
        className="lanyard-part mainDrop2"
        src={mainDrop2}/>

    </div>
  )
}

import "./DisplayLanyard.css"
import bridgeBase1 from "../../assets/lanyardAssets/Base/Br base 1.png"
import bridgeBase2 from "../../assets/lanyardAssets/Base/Br base 2.png"
import bridgeMask1 from "../../assets/lanyardAssets/Mask/Br mask 1.png"
import bridgeMask2 from "../../assets/lanyardAssets/Mask/Br mask 2.png"
import bridgeShadow from "../../assets/lanyardAssets/Shadow/Br shadow.png"
import mainDropBase1 from "../../assets/lanyardAssets/Base/Md base 1.png"
import mainDropBase2 from "../../assets/lanyardAssets/Base/Md base 2.png"
import mainDropMask1 from "../../assets/lanyardAssets/Mask/Md mask 1.png"
import mainDropMask2 from "../../assets/lanyardAssets/Mask/Md mask 2.png"
import mainDropShadow from "../../assets/lanyardAssets/Shadow/Md shadow.png"

import { useEffect, useState } from "react"
import {
  getBraidStylesById,
  getNeckStylesById,
  getSideDropsById,
} from "../../services/optionsService.js"

export const DisplayLanyard = ({ lanyard }) => {
  const [primaryCords, setPrimaryCords] = useState({})
  const [neckCords, setNeckCords] = useState({})
  const [sideDrops, setSideDrops] = useState({})

  useEffect(() => {
    getBraidStylesById(lanyard.braidStyleId).then((styleObj) => {
      setPrimaryCords(styleObj[0])
    })
    getNeckStylesById(lanyard.neckStyleId).then((neckObj) => {
      setNeckCords(neckObj[0])
    })
    getSideDropsById(lanyard.numberOfDropsId).then((dropObj) => {
      setSideDrops(dropObj[0])
    })
  }, [lanyard])

  // function to find what color value to use from the lanyard obj on the displayed lanyard part
  const getColorPicker = (cordName) => {
    if (cordName === "prim1") {
      return lanyard.primaryCordColor1
    }
    if (cordName === "prim2") {
      return lanyard.primaryCordColor2
    }
    if (cordName === "prim3") {
      return lanyard.primaryCordColor3
    }
  }

  return (
    <>
      <div className="lanyard-box">
        {/* main braid  */}
        {primaryCords?.images?.map((cordImg) => {
          return (
            <section key={cordImg.name}>
              <div
                className="mask-color"
                style={{
                  backgroundColor: `${getColorPicker(cordImg.name)}`,
                  WebkitMaskImage: `url("${cordImg.imgMask}")`,
                  maskImage: `url("${cordImg.imgMask}")`,
                }}
              />

              <img className={`lanyard-part base-img`} src={cordImg.imgBase} />
            </section>
          )
        })}

        {/* neck braid  */}
        {neckCords?.images?.map((cordImg) => {
          return (
            <section key={cordImg.name}>
              <div
                className="mask-color"
                style={{
                  backgroundColor: `${cordImg.name === "neck1" ? lanyard.neckRestColor1 : lanyard.neckRestColor2}`,
                  WebkitMaskImage: `url("${cordImg.imgMask}")`,
                  maskImage: `url("${cordImg.imgMask}")`,
                }}
              />

              <img className={`lanyard-part base-img`} src={cordImg.imgBase} />
            </section>
          )
        })}

        {/* side drops  */}
        <section key={sideDrops?.id}>
          <div
            className="mask-color"
            style={{
              backgroundColor: `${lanyard.sideDropColor}`,
              WebkitMaskImage: `url("${sideDrops?.imgMask}")`,
              maskImage: `url("${sideDrops?.imgMask}")`,
            }}
          />

          <img className="lanyard-part base-img" src={sideDrops?.imgBase} />
        </section>

        {/* Bridge  */}
        <section key={"bridge1"}>
          <div
            className="mask-color"
            style={{
              backgroundColor: `${lanyard.bridgeBraidColor1}`,
              WebkitMaskImage: `url("${bridgeMask1}")`,
              maskImage: `url("${bridgeMask1}")`,
            }}
          />

          <img className="lanyard-part base-img" src={bridgeBase1} />
        </section>

        <section key={"bridge2"}>
          <div
            className="mask-color"
            style={{
              backgroundColor: `${lanyard.bridgeBraidColor2}`,
              WebkitMaskImage: `url("${bridgeMask2}")`,
              maskImage: `url("${bridgeMask2}")`,
            }}
          />

          <img className="lanyard-part base-img" src={bridgeBase2} />
        </section>

        {/* Main drops */}
        <section key={"mainDrop1"}>
          <div
            className="mask-color"
            style={{
              backgroundColor: `${lanyard.mainDropColor}`,
              WebkitMaskImage: `url("${mainDropMask1}")`,
              maskImage: `url("${mainDropMask1}")`,
            }}
          />

          <img className="lanyard-part base-img" src={mainDropBase1} />
        </section>

        <section key={"mainDrop2"}>
          <div
            className="mask-color"
            style={{
              backgroundColor: `${lanyard.mainDropColor}`,
              WebkitMaskImage: `url("${mainDropMask2}")`,
              maskImage: `url("${mainDropMask2}")`,
            }}
          />

          <img className="lanyard-part base-img" src={mainDropBase2} />
        </section>
        <section>
          <img className="lanyard-shadow" src={primaryCords?.shadow} />
          <img className="lanyard-shadow" src={neckCords?.shadow} />
          <img className="lanyard-shadow" src={sideDrops?.shadow} />
          <img className="lanyard-shadow" src={bridgeShadow} />
          <img className="lanyard-shadow" src={mainDropShadow} />
        </section>
      </div>
    </>
  )
}

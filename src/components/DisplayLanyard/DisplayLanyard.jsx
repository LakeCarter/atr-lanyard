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




export const DisplayLanyard = () => {

  const [lanyard, setLanyard] = useState([])

useEffect(()=>{
  setLanyard({
    
  })
},[])

  return <div className="display-container">
    {/* main braid  */}
    <img className="lanyard-part prim-1" src={braid1}/>
    <img className="lanyard-part prim-2" src={braid2}/>
    <img className="lanyard-part prim-3" src={braid3}/>

    {/* neck braid  */}
    <img className="lanyard-part neck-1" src={neck1}/>
    <img className="lanyard-part neck-2" src={neck2}/>

    {/* side drops  */}
    
    </div>
}

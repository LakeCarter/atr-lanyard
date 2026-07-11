import { Outlet, Route, Routes } from "react-router-dom"
import { Home } from "../components/Home/Home.jsx"
import { Nav } from "../components/Nav/Nav.jsx"
import { CreateLanyard } from "../components/CreateLanyard/CreateLanyard.jsx"
import { useEffect, useState } from "react"
import { ViewAll } from "../components/ViewAll/ViewAll.jsx"
import { LanyardView } from "../components/LanyardView/LanyardView.jsx"

export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    const localUser = localStorage.getItem("atr_user")
    const learningUserObject = JSON.parse(localUser)
    setCurrentUser(learningUserObject)
  }, [])

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Nav />
              <Outlet />
            </>
          }
        >
          <Route index element={<Home />} />
          
          <Route
            path="create-lanyard"
            element={<CreateLanyard currentUser={currentUser} />}
          />

          <Route path="view-all" element={<ViewAll />} />
          <Route path="lanyard/:lanyardId" element={<LanyardView currentUser={currentUser}/>} />
        </Route>
      </Routes>
    </>
  )
}

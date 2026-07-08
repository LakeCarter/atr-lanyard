import { Outlet, Route, Routes } from "react-router-dom"
import { Home } from "../components/Home/Home.jsx"
import { Nav } from "../components/Nav/Nav.jsx"
import { CreateLanyard } from "../components/CreateLanyard/CreateLanyard.jsx"

export const ApplicationViews = () => {
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
          <Route path="create-lanyard" element={<CreateLanyard/>} />
        </Route>
      </Routes>
    </>
  )
}

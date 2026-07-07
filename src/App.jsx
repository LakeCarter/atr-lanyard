import { useState } from "react"
import "./App.css"
import { Route, Routes } from "react-router-dom"
import { ApplicationViews } from "./views/ApplicationViews.jsx"

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<ApplicationViews />} />
      </Routes>
    </>
  )
}

export default App

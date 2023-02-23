import React, { useState } from 'react'
import Layout from "./app/components/Layout";
import Home from "./app/pages/Home";
import Camera from "./app/pages/Camera";
import Map from "./app/pages/Map";
import UploadForm from "./app/pages/UploadForm";
import ButtonsOverlay from "./app/components/ButtonsOverlay";
import Profile from "./app/pages/Profile";
import PetInfo from "./app/pages/PetInfo";
import './App.css'
import {HashRouter as Router, Route, Routes} from "react-router-dom";

function App() {


  return (
      <div className="App">
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/profile" element={<Profile/>}/>
              <Route path={"map"} element={<Map/>}>
                <Route path={"lost"} element={<ButtonsOverlay lost={true}/>}/>
                <Route path={"found"} element={<ButtonsOverlay lost={false}/>}/>
                <Route  path={"info/:id"} element={<PetInfo/>}/>
                <Route  path={"upload"} element={<UploadForm/>}/>
                <Route  path={"camera"} element={<Camera/>}/>
              </Route>
            </Routes>
          </Layout>
        </Router>
      </div>
  )
}

export default App

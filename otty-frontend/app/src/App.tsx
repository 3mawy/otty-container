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
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from "./app/pages/Login";
import Register from "./app/pages/Register";
import AuthProvider from "./provider/authProvider";
import {ProtectedRoute} from "./app/components/ProtectedRoute";
import {RegistrationRoute} from "./app/components/RegistrationRoute";
import Chat from "./app/pages/Chat";

function App() {

    const[isAutheticated, setisAutheticated] = useState(false);

  return (
      <div className="App">
        <AuthProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/login" element={<RegistrationRoute><Login/></RegistrationRoute>}/>
              <Route path="/register" element={<RegistrationRoute><Register/></RegistrationRoute>}/>
              <Route path="/profile" element={<ProtectedRoute><Profile/></ProtectedRoute>}/>
              <Route path="/chat" element={<ProtectedRoute><Chat/></ProtectedRoute>}/>
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
        </AuthProvider>
      </div>
  )
}

export default App

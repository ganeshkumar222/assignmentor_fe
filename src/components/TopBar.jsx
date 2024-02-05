import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export const TopBar = () => {
    let navigate = useNavigate()
  return <>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand"  onClick={()=>{navigate("/")}}>SMMS</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" onClick={()=>{navigate("/student")}}>StudentDashboard</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={()=>{navigate("/mentor")}}>MentorDashboard</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={()=>{navigate("/addstudent")}}>ADD Student</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={()=>{navigate("/addmentor")}}>ADD Mentor</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </>
}

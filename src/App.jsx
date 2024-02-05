import React from 'react'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import {TopBar} from "./components/TopBar"
import { Dashboard } from './components/Dashboard'
import { Student } from './components/Student'
import { Mentor } from './components/Mentor'
import { AssignStudent } from './components/AssignStudent'
import { ChangeMentor } from './components/ChangeMentor'
import { AddStudent } from './components/AddStudent'
import {AddMentor} from './components/AddMentor'
import { StudentProfile } from './components/StudentProfile'
import { MentorProfile } from './components/MentorProfile'
export const APIURL = 'https://assign-mentor-wgzs.onrender.com/'
export const App = () => {
  return <>
  <BrowserRouter>
    <TopBar></TopBar>
    <Routes>
      <Route path='/' element={<Dashboard></Dashboard>}></Route>
      <Route path='/student' element={<Student></Student>}></Route>
      <Route path='/mentor' element={<Mentor></Mentor>}></Route>
      <Route path='/mentor/:id' element={<AssignStudent></AssignStudent>}></Route>
      <Route path='/student/:id' element={<ChangeMentor></ChangeMentor>}></Route>
      <Route path='/addstudent' element={<AddStudent></AddStudent>}></Route>
      <Route path='/addmentor' element={<AddMentor></AddMentor>}></Route>
      <Route path="/studentprofile/:id" element={<StudentProfile></StudentProfile>}></Route>
      <Route path="/mentorprofile/:id" element={<MentorProfile></MentorProfile>}></Route>
    </Routes>
  </BrowserRouter>
  </>
}

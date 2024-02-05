import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { APIURL } from '../App'
import { useState } from 'react'
export const MentorProfile = () => {
let {id} = useParams()
let [data,setData] = useState({})
let [students,setStudents] =  useState([])
let navigate = useNavigate()
let getData = async ()=>{
    try {
        let res = await axios.get(`${APIURL}school/getmentors/${id}`)
        
        if(res.status===200){
            setStudents(res.data.mentor.students)
            setData(res.data.mentor)
        }
    } catch (error) {
        toast.error("internal server error")
    }
}
useEffect(()=>{
    getData()
},[])
  return <>
  <div className='container mt-1 text-center col-6'>
    <h3>Mentor Profile</h3>
  <div className="card mt-5 shadow">
    <div className='text-center'>
    <img src="https://www.w3schools.com/howto/img_avatar.png" className="card-img-top mt-1" alt="..." style={{width:"15em"}}/>
    </div>
 
  <div className="card-body">
    <h5 className="card-title">{data.name}</h5>
    <p className="card-text">Email:{data.email}</p>
    <p className='card-text'>Mentoring students:</p>
   
    <ul className='list-group list-group-flush'>
      {
        students.map((e,i)=>{
          return <li className='list-group-item' key={i}>{e}</li>
        })
      }
    </ul>
    <a href="#" className="btn btn-primary" onClick={()=>{navigate(`/mentor`)}}>Go to Dashboard</a>
  </div>
</div>
  </div>
  
  </>
}

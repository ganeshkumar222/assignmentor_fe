import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { APIURL } from '../App'
import { useState } from 'react'

export const StudentProfile = () => {

  let {id} = useParams()
  let [data,setData] = useState({})
  let [students,setStudents] =  useState([])
  let navigate = useNavigate()
  let getData = async ()=>{
      try {
          let res = await axios.get(`${APIURL}school/getstudents/${id}`)
        // console.log(res.data.student.previousmentor)
          if(res.status===200){
              setStudents(res.data.student.previousmentor)
              setData(res.data.student)
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
      <h3>student Profile</h3>
    <div className="card mt-5 shadow">
      <div className='text-center'>
      <img src="https://www.w3schools.com/howto/img_avatar.png" className="card-img-top mt-1" alt="..." style={{width:"15em"}}/>
      </div>
   
    <div className="card-body">
      <h5 className="card-title">{data.name}</h5>
      <p className="card-text">Email:{data.email}</p>
      <p className='card-text'>Mentor:{data.mentor}</p>
      <p className='card-text'>Previous mentor:</p>
     
      <ul className='list-group list-group-flush'>
        {
          students.length>0?<>{students.map((e,i)=>{
            return <li className='list-group-item' key={i}>{e}</li>
          })
        }</>:<><p>This student doesn't have a previous mentor</p></>
        }
      </ul>
      <a href="#" className="btn btn-primary" onClick={()=>{navigate(`/student`)}}>Go to Dashboard</a>
    </div>
  </div>
    </div>
    
    </>
  }
  

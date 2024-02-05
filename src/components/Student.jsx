import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { APIURL } from '../App'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

export const Student = () => {
    let [data,setData] = useState([])
    let navigate = useNavigate()

    let getData = async () => {
        try {
            let res = await axios.get(APIURL+"school/"+"getstudents")
            if(res.status===200){
                
                setData(res.data.data)
               
                
            }
            
        }
         catch (error) {

            toast.error("internal server error")
        }
    }

    





    useEffect(()=>{
        getData()
    },[])
  return <>
  <div className='container text-center'>
    <h3 className='h3 mt-2 mb-2'>Student Dashboard</h3>
    <table className='table table-dark '>
        <thead>
            <tr>
                <td>#</td>
                <td>Name</td>
                <td>Email</td>
                <td>Mentor Action</td>
                <td>View Profile</td>
            </tr>
        </thead>
        <tbody>
            {data.map((e,i)=>{
                return <tr key={e._id} >
                    <td>{i+1}</td>
                    <td>{e.name}</td>
                    <td>{e.email}</td>
                    <td>{e.mentor?<><button className='btn btn-primary' onClick={()=>{navigate(`/student/${e._id}`)}}>changementor</button></>:<><button className='btn btn-primary' onClick={()=>{navigate(`/student/${e._id}`)}}>assignmentor</button></>}</td>
                    <td><button   className='btn btn-primary' onClick={()=>{navigate(`/studentprofile/${e._id}`)}}>profile</button></td>
                </tr>
            })}
        </tbody>
    </table>
  </div>
  </>
}

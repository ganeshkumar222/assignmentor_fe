import axios from 'axios'
import  { useState } from 'react'
import { toast } from 'react-toastify'
import { APIURL } from '../App'
import { useNavigate } from 'react-router-dom'

export const AddStudent = () => {
   let [name,setName] = useState()
   let [email,setEmail] = useState()
   let navigate = useNavigate()
    let handleSubmit = async () => {
        try {
            event.preventDefault()
            console.log(name,email)
            let value ={}
            value.name = name
            value.email = email
            let res = await axios.post(`${APIURL}school/createstudent`,value)
            if(res.status===200){
                toast.success("student created successfully")
                navigate("/student")
            }

            
        } catch (error) {
            toast.error("internal server error")
        }
    }
  return <>
  <div className='container col-lg-3 col-sm-12 mt-5 text-center'>
    <h3 className='h3'>Add a student</h3>
  <form className='mt-5 ' onSubmit={()=>{handleSubmit()}}>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name" required onChange={()=>{setName(event.target.value)}}/>
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" required onChange={()=>{setEmail(event.target.value)}}/>
  </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
  </div>
  </>
}

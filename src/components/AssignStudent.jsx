import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { APIURL } from '../App'
import { toast } from 'react-toastify'
// import Select from 'react-select/dist/declarations/src/Select'
import Select from 'react-select';
export const AssignStudent = () => {
    let {id} = useParams()
    let [data,setData] = useState({})
    let [options,setOptions] = useState([])
    let [selectedOptions,setSelectedOptions] = useState([])
    let navigate = useNavigate()
    
     
    let getData = async ()=>{
        try {
            let res = await axios.get(`${APIURL}school/getmentors/${id}`)
            // console.log(res.data.mentor)
            if(res.status===200){
                setData(res.data.mentor)
            }
        } catch (error) {
            toast.error("internal server error")
        }
    }
    let getStudents = async ()=>{
        try {
           let res = await axios.get(`${APIURL}school/getstudents`) 
           console.log(res.data.data)
           if(res.status===200){
            // console.log(res.data.data)
            let value = res.data.data.filter((e)=>{
                return e.mentor===""
            })
            console.log(value.length)
            if (value.length){
                console.log("inside getstudents of assign")
                let option = value.map((e)=>{
                    let obj = {}
                    obj.value = e.name
                    obj.label = e.name
                    return obj
                  })
                  setOptions(option)
 
            }
            else{
                let options = []
                let obj  = {
                    label :"All the students have been assigned a mentor - try change mentor in the student Dashboard"
                }
                options.push(obj)
                setOptions(options)
            }

           
            
           }
        } catch (error) {
            toast.error("internal server error")
        }
    }
    
    let handleSubmit = async ()=>{
        try {
            let array = []
            array.push(data)
            array.push(selectedOptions)
            console.log(array)
            let res = await axios.put(`${APIURL}school/assignstudent`,array)
            if(res.status===200){
                toast.success(res.data.message)
                navigate(`/mentorprofile/${id}`)
            }
        } catch (error) {
            toast.error("internal server error")
        }
       
        
    }
    useEffect(()=>{
        getData()
        getStudents()
    },[])
  return <>
  <div className='container text-center'>
    <h1 className='h1 text-center mt-5'>MentorName:{data.name}</h1>
    <h6 className='h6'>Available Students list</h6>
    

<Select
       
        isMulti={true}
        onChange={setSelectedOptions}
        options={options}
      />



<button className='btn btn-primary mt-3'onClick={()=>{handleSubmit()}}>select and submit</button>
    
  </div>
  </>
}

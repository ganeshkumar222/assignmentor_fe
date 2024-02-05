import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { APIURL } from '../App'
import { toast } from 'react-toastify'
import Select from 'react-select';
export const ChangeMentor = () => {
    let [student,setStudent] = useState({})
    let [options,setOptions] = useState([])
    let [selectedOptions,setSelectedOptions] = useState()
    let navigate =  useNavigate()
    let {id} = useParams()

    let getData = async ()=>{
        try {
            let res = await axios.get(`${APIURL}school/getstudents/${id}`)
            // console.log(res.data.mentor)
            if(res.status===200){
                setStudent(res.data.student)
            }
        } catch (error) {
            toast.error("internal server error")
        }
    }

    let getMentors = async () =>{
        try {
            let res = await axios.get(`${APIURL}school/getmentors`)

            if(res.status === 200){
               let  value = res.data.data
                let option = value.map((e)=>{
                    let obj = {}
                    obj.value = e.name
                    obj.label = e.name
                    return obj
                  })
                  setOptions(option)
            }
        } catch (error) {
            toast.error("internal server error")
        }
    }


    let handleSubmit = async () => {
        try {
            let array = []
            array.push(student)
            array.push(selectedOptions)
            let res = await axios.put(`${APIURL}school/assignmentor`,array)
            if(res.status===200){
                toast.success("mentor assigned successfully")
                navigate(`/studentprofile/${id}`)
            }
        } catch (error) {
          toast.error("internal server error") 
        }
    }

    useEffect(()=>{
        getData()
        getMentors()
    },[])
  return <>
    <div className='container text-center'>
        <h1 className='h1 mt-2 mb-2'>StudentName:{student.name}</h1>
        <h6 className='h6 mt-2 mb-2'>Assign or change mentor</h6>
        

        <Select
       
        onChange={setSelectedOptions}
        options={options}
      />
      
      <button className='btn btn-primary mt-3' onClick={()=>{handleSubmit()}}>select and submit</button>

    </div>
  </>
}

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { APIURL } from '../App'
import { toast } from 'react-toastify'
export const Dashboard = () => {
     let [data,setData] = useState()
    let getData = async ()=>{
        try {
            let res = await axios.get(APIURL)
            if(res.status===200){
                
                setData(res.data.message)

        }
        
        } catch (error) {
            toast.error("internal server error")
        }
    }
 useEffect(()=>{
    getData()
 },[])
  return<>
  <div className='container  d-flex justify-content-center'>
    <h1 className='h1 mt-5'>
    {data}
    </h1>
  </div>
  
  </>
}

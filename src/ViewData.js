/* eslint-disable no-unused-expressions */
import React from 'react'
import { useEffect,useState } from 'react';
import { useNavigate, useParams } from 'react-router';

const ViewData = () => {
const [data,setData] = useState([])
const {id} = useParams()
const navigate = useNavigate()


      useEffect (()=>{
        const fetchData = async () => {
            let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
             response.json().then((val)=>setData([val]))
        }
        fetchData()
      },[])
      console.log(data,"data")
  return (
    <div>
      <h1>View Details:</h1>
      {data.map((x)=>(
        <>
        <h4>{x.title}</h4>
        <h5>{x.body}</h5>
        </>
      ))}
      <button onClick={()=>navigate("/")}>Back</button>
    </div>
  )
}

export default ViewData

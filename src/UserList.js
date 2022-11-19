import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ApiCard from './ApiCard'
import './userlist.css'




const UserList = () => {
  const [apiUser , setApiArtc] = useState([])

  useEffect(()=> {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(
        elm => {
            console.log(elm.data)
           setApiArtc(elm.data)
        }
    )
    .catch((error) => { 
        console.log(error)
    })
  
   },[])
  
  
  
  
  
  
  return (
    <div className='list'>
        {
            apiUser.map((el , i) => <ApiCard el={el} key={i}></ApiCard>)
        }
    </div>
  )
}

export default UserList
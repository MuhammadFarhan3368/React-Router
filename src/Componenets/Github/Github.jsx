import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Github() {
  const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/Muhammadfarhan3368")
    //     .then(response => response.json())
    //     .then(data =>{ 
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])
  return (
    <div className='text-center bg-orange-700 text-white font-bold font-serif m-5 p-4 rounded-lg'>
        Github Followers: {data.followers} 
        <img src={data.avatar_url} alt="github image" width={300}/></div>
  )
}

export const GithubInfo = async ()=>{
  let response = await fetch('https://api.github.com/users/Muhammadfarhan3368')
  return response.json()
}

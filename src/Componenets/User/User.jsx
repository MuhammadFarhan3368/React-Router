import React from 'react'
import { useParams } from 'react-router-dom'

export default function User() {
    const {userid} = useParams()
  return (
    <div className='text-center bg-orange-700 text-white font-bold font-serif m-5 p-4 rounded-lg'>
        User: {userid}
        </div>
  )
}

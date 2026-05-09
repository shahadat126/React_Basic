import React from 'react'

const Project = ({name}) => {
    function handleEnroll(){
        alert(`you enrolled in ${name}`)
    }
  return (
    <div className=' border p-4 bg-gray-500 rounded-sm my-4 flex items-center justify-between'>
       <span>Name:{name}</span> 
        <button onClick={handleEnroll} className='bg-red-500 text-white p-2'>Enroll</button>
    </div>
  )
}

export default Project
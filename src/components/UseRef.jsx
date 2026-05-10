import React, { useRef } from 'react'

const UseRef = () => {
    const textRef = useRef(null)
    function handleClick(){
        textRef.current.innerText = "Text changed"
    }
  return (
    <div>
        <h1 ref={textRef}>Content Text</h1>
        <button className='border bg-blue-900' onClick={handleClick}>Change Text</button>
    </div>
  )
}

export default UseRef
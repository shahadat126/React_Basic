import React, { useRef } from 'react'

const UseRef = () => {
    const textRef = useRef(null)
    const textsRef = useRef(null)
    function handleClick(){
         textRef.current.innerText = "Text changed"
        textsRef.current.innerHTML = "<strong>Html changed ! </strong>"
        textRef.current.style.color = "red";
        textRef.current.style.backgroundColor  =  "blue";
    }
  return (
    <div>
        <h1 ref={textRef}>Content Text</h1>
        <p ref={textsRef}>Html content text</p>
        <button className='border bg-blue-900' onClick={handleClick}>Change Text</button>
    </div>
  )
}

export default UseRef
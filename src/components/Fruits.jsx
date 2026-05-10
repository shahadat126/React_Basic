import React, { useState } from 'react'

const Fruits = () => {
    const [fruits,setfruits] = useState(["apple","mango","orange"])
    function handleFruit(event){
        event.preventDefault();
        const Newfruit = event.target.newfruit.value
        setfruits([...fruits,Newfruit])

    }
    function handleDelete(fruitToDelete){
        const updatedfruits= fruits.filter((fruit)=>fruit != fruitToDelete)
        setfruits(updatedfruits)
    }
  return (
    <div>
        {fruits.map((fruit)=>(
            <div className='flex flex-row  gap-15'><p>{fruit}</p>
            <button className='bg-blue-500' onClick={()=>handleDelete(fruit)}>Delete</button></div>
        ))}
        <form onSubmit={handleFruit}>
            <input type="text" name='newfruit' placeholder='Enter a Fruit name' className='border '/>
            <button type="submit" className='bg-blue-950'>Add Fruit</button>
        </form>
    </div>
  )
}

export default Fruits
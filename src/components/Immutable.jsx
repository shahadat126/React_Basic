import React from 'react'
import { useState } from 'react';

const Immutable = () => {
    const [user,setUser] = useState({
            name: 'bob',
            address: {
                city:"dhaka",
                zip: "1310"
            }
    })
    // function handleChange(){
    //     setUser(prevs=> ({
    //         ...prev,
    //         name: "khan"
    //     }))

    // }
    function handleChange(){
        const newuser = {
            ...user,
            name: "sk"
        }
        setUser(newuser)
    }
  return (
    <div>
        <h1>Immutable content</h1>
        <div>
            <p>Name: {user.name} </p>
            <p>Age:{user.age} </p>
            <p>Address: {user.address.city}</p>
            <button onClick={handleChange}>Change </button>
        </div>
    </div>
  )
}

export default Immutable
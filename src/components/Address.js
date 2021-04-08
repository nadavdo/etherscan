import React, { useState } from "react";


const Address = ({setAddress}) => {
    const[value, setValue] = useState('')
    const handleValueChange = (event) => {
        setValue(event.target.value)
    }

  return (
    
        <>
        <input id='useState' type='text' onChange={handleValueChange}/>
            
          <button onClick={() => setAddress(value)}>
            Address
          </button>
          
        </>
      );
}

export default Address
import React, { useState } from 'react'

const InputBox = () => {
    const [input,SetInput] = useState('');
    const [greeting,SetGreeting] = useState('');

    const handleGreeting = ()=>{
        if(input){
            SetGreeting(`Hello ${input}`)
        }
        else{
            SetGreeting(`Please Enter Your Name`)
        }
    }
  return (
    <div>
        <div>
            <input type='text' placeholder='Name:' className='border border-black m-2 p-2' onChange={(e)=>SetInput(e.target.value)}/>
            <br/>
            <button className='border border-black m-2 p-2' onClick={handleGreeting}>Submit</button>
            {greeting && <p>{greeting}</p>}
        </div>
    </div>
  )
}

export default InputBox
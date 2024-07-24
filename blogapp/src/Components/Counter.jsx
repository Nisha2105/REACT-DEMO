import React from 'react'
import { useState } from 'react'
import './Counter.css'

const Counter = () => {
    const [count, setCount] = useState(0);

    const incCount=()=>{
        setCount(count+1);
    }

    function decCount(){
        if(count<=0){
            return
        }
        else{
            setCount(count-1);

        }
    }


  return (
    <div className='body text-center mt-20'>
        <span className='count '>Count: {count} </span>

        <div className='btns mt-10 flex justify-evenly'>
            <button onClick={incCount} className='inc '>Increment</button>
            <button onClick={decCount} className='dec'>Decrement</button>
        </div>
    </div>
  )
}

export default Counter
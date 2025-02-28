import React, { useState } from 'react'
import "./style.css"
export default function Counter() {

    const[count , setCount] = useState(0)

  return (
    <>
     <div className='container' >
        <h1 className="number">{count}</h1>
     </div>
    
     <section className="btn-container">
        
        <button onClick={() => setCount(count+1)} className="increment">+</button>
        <button onClick={() => setCount(count-1)} className="increment">-</button>

        </section>   

    </>
  )
}



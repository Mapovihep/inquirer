import React from 'react'
import { useState } from "react"

const QiuzTask = props => {
    const [state, setState] = useState({question: '?', done: props.done, new: props.new})
    
    return (
        <li className='quiz_task__App'>
            {!state.done ? 
            <span style={{ display: 'inline-block', width: "300px" }}>{state.question}</span>
            : <input 
            value={state.question} 
            autoFocus
            onChange={(e)=>{
                setState(s=>({...s, question: e.target.value}))
            }}>
            </input>}
            <span>result 0/tasks.length</span>
            <button onClick={()=>setState(state=>({...state, done: !state.done}))}>Edit</button>
        </li> 
    )
}

export default QiuzTask
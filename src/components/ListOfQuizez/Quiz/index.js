import React, { useEffect, useState } from "react"
import QiuzTask from "./QuizTask"

const Quiz = props => {
    
    const [quizState, setQuizState] = useState({})
    console.log(props.tasks)

    return(
        <li className="quiz__app">
            <h5>{props.title}</h5>
            <ul>
                {props.tasks.map(el=><QiuzTask key={Math.random()} title={el} new={true} done={false}/>)}
            </ul>
            
        </li>
    )

}

export default Quiz;
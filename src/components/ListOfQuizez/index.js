import React from "react"
import { useSelector } from "react-redux";
import Quiz from "./Quiz";

const ListOfQuizes = () => {
    const quizes = useSelector(state => state.main.quizes)
    console.log(quizes)
    //массив с quizes(Quiz - отдельный список заданий)
    return(
        <ul className="list_of_quizes__app">
            {quizes.map(el=><Quiz title={el.title} tasks={el.quizTasks}/>)}
        </ul>
    )

}

export default ListOfQuizes;
import reactDom from "react-dom";
import React, { useState } from "react";
import { Button, Input } from "@mui/material";
import { useDispatch } from "react-redux";
import { ADD_QUIZ } from "../../actions/newQuiz";

const InputForQuizTitle = props => {

    const dispatch = useDispatch();
    const [ state, setState ] = useState({text: ''})

    const handleChange = e => {
        setState(state => ({...state, text: e.target.value}))
    } 

    const handleSubmit = e =>{
        e.preventDefault();
        state.text!='' && dispatch({type: ADD_QUIZ, payload: state.text})
    }
    return (
        <form onSubmit={handleSubmit}>
            <Input placeholder='Input your quiz title' onChange={handleChange}></Input>
            <Button>ADD QUIZ</Button>
        </form>
    )
}
export default InputForQuizTitle;
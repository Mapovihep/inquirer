import { ADD_QUIZ } from "../actions/newQuiz"

const initialState = {
    quizes: [{title: '1', quizTasks: ['first', 'second', 'third']}, {title: '2', quizTasks: ['first', 'second', 'third']}, {title: '3', quizTasks: ['first', 'second', 'third']}]
}

export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_QUIZ:
        return {...state, text: 'new text'}
        default:
        return state
    }
}
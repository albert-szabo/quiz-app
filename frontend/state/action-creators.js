import * as types from './action-types'
import axios from 'axios'

// ❗ You don't need to add extra action creators to achieve MVP
export function moveClockwise() { 
  return { 
    type: types.MOVE_CLOCKWISE
  }
}

export function moveCounterClockwise() { 
  return {
    type: types.MOVE_COUNTERCLOCKWISE
  }
}

export function selectAnswer(answerToSet) { 
  return {
    type: types.SET_SELECTED_ANSWER,
    payload: answerToSet
  }
}

export function setMessage(messageToSet) { 
  return {
    type: types.SET_INFO_MESSAGE,
    payload: messageToSet
  }
}

export function setQuiz(valueToSet) { 
  return {
    type: types.SET_QUIZ_INTO_STATE,
    payload: valueToSet
  }
}

export function inputChange(name, value) { 
  return {
    type: types.INPUT_CHANGE,
    payload: {name, value}
  }
}

export function resetForm() { 
  return {
    type: types.RESET_FORM
  }
}

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state

    dispatch(setQuiz(null));
    axios.get('http://localhost:9000/api/quiz/next')
      .then(response => {
        console.log(response);
        dispatch(setQuiz(response.data));
      })
      .catch(error => console.error({error}));
  }
}

export function postAnswer(quiz_ID, selectedAnswer_ID) {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz

    axios.post('http://localhost:9000/api/quiz/answer', {
      quiz_id: quiz_ID,
      answer_id: selectedAnswer_ID
    })
      .then(response => {
        console.log(response);
        dispatch(selectAnswer(null));
        dispatch(setMessage(response.data.message));
        dispatch(fetchQuiz());
      })
      .catch(error => console.error({error}));
  }
}

export function postQuiz(newQuestion, newTrueAnswer, newFalseAnswer) {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form

    axios.post('http://localhost:9000/api/quiz/new', {
      question_text: newQuestion,
      true_answer_text: newTrueAnswer,
      false_answer_text: newFalseAnswer
    })
      .then(response => {
        console.log(response);
        dispatch(setMessage(`Congrats: "${newQuestion}" is a great question!`));
        dispatch(resetForm());
      })
      .catch(error => console.error({error}));
  }
}

// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state

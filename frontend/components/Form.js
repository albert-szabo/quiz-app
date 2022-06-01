import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'

export function Form(props) {

  const onChange = event => {
    props.inputChange(event.target.name, event.target.value);
  }

  const onSubmit = event => {
    event.preventDefault();
    props.postQuiz();
  }

  const isDisabled = () => {
    if (props.form.newQuestion.trim().length > 0 && props.form.newTrueAnswer.trim().length > 0 && props.form.newFalseAnswer.trim().length > 0) {
      return false
    } else {
      return true
    }
  }

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} id="newQuestion" name='newQuestion' placeholder="Enter question" />
      <input maxLength={50} onChange={onChange} id="newTrueAnswer" name='newTrueAnswer' placeholder="Enter true answer" />
      <input maxLength={50} onChange={onChange} id="newFalseAnswer" name='newFalseAnswer' placeholder="Enter false answer" />
      <button id="submitNewQuizBtn" disabled={isDisabled()}>Submit new quiz</button>
    </form>
  )
}

export default connect(st => st, actionCreators)(Form)

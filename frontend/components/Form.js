import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'

export function Form(props) {

  const onChange = event => {
    props.inputChange(event.target.name, event.target.value);
  }

  const onSubmit = event => {
    event.preventDefault();
    props.postQuiz(props.form.newQuestion, props.form.newTrueAnswer, props.form.newFalseAnswer);
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
      <input maxLength={50} value={props.form.newQuestion} onChange={onChange} id="newQuestion" name='newQuestion' placeholder="Enter question" />
      <input maxLength={50} value={props.form.newTrueAnswer} onChange={onChange} id="newTrueAnswer" name='newTrueAnswer' placeholder="Enter true answer" />
      <input maxLength={50} value={props.form.newFalseAnswer} onChange={onChange} id="newFalseAnswer" name='newFalseAnswer' placeholder="Enter false answer" />
      <button id="submitNewQuizBtn" disabled={isDisabled()}>Submit new quiz</button>
    </form>
  )
}

export default connect(st => st, actionCreators)(Form)

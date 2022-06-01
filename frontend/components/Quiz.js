import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/action-creators';

export function Quiz(props) {
  useEffect(() => {
    props.fetchQuiz();
  }, []);

  const handleUpperAnswerSelectionClick = () => {
    props.selectAnswer(props.quiz.answers[0].answer_id);
  }

  const handleLowerAnswerSelectionClick = () => {
    props.selectAnswer(props.quiz.answers[1].answer_id);
  }

  const handleAnswerSubmissionClick = () => {
    props.postAnswer();
  }

  return (
    <div id="wrapper">
      { props.quiz ? (
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        // true ? (
          <>
            <h2>{props.quiz.question}</h2>

            <div id="quizAnswers">

            {props.selectedAnswer === props.quiz.answers[0].answer_id ? (
              <div className="answer selected">
                {props.quiz.answers[0].text}
                <button>
                  SELECTED
                </button>
              </div>
              ) : (
              <div className="answer">
                {props.quiz.answers[0].text}
                <button onClick={handleUpperAnswerSelectionClick}>
                  Select
                </button>
              </div>
              ) }

            {props.selectedAnswer === props.quiz.answers[1].answer_id ? (
              <div className="answer selected">
                {props.quiz.answers[1].text}
                <button>
                  SELECTED
                </button>
              </div>
              ) : (
              <div className="answer">
                {props.quiz.answers[1].text}
                <button onClick={handleLowerAnswerSelectionClick}>
                  Select
                </button>
              </div>
              ) }

            </div>

            {props.selectedAnswer ? <button id="submitAnswerBtn" onClick={handleAnswerSubmissionClick}>Submit answer</button> : <button id='submitAnswerBtn' disabled='true'>Submit answer</button>}
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

export default connect(st => st, actionCreators)(Quiz);
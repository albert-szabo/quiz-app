import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/action-creators';

// --i is a custom CSS property, no need to touch that nor the style object

{/* <div className="cog active" style={{ "--i": 0 }}>B</div>
<div className="cog" style={{ "--i": 1 }}></div>
<div className="cog" style={{ "--i": 2 }}></div>
<div className="cog" style={{ "--i": 3 }}></div>
<div className="cog" style={{ "--i": 4 }}></div>
<div className="cog" style={{ "--i": 5 }}></div> */}

export function Wheel(props) {
  const handleCounterclockwiseClick = () => {
    console.log('You clicked the counterclockwise button.');
    props.moveCounterClockwise();
  }

  const handleClockwiseClick = () => {
    console.log('You clicked the clockwise button.')
    props.moveClockwise();
  }

  return (
    <div id="wrapper">
      <div id="wheel">
        {props.wheel === 0 ? (<>
          <div className="cog active" style={{ "--i": 0 }}>B</div>
          <div className="cog" style={{ "--i": 1 }}></div>
          <div className="cog" style={{ "--i": 2 }}></div>
          <div className="cog" style={{ "--i": 3 }}></div>
          <div className="cog" style={{ "--i": 4 }}></div>
          <div className="cog" style={{ "--i": 5 }}></div>
          </>) : console.log(props.wheel)
        }
        {props.wheel === 1 ? (<>
          <div className="cog" style={{ "--i": 0 }}></div>
          <div className="cog active" style={{ "--i": 1 }}>B</div>
          <div className="cog" style={{ "--i": 2 }}></div>
          <div className="cog" style={{ "--i": 3 }}></div>
          <div className="cog" style={{ "--i": 4 }}></div>
          <div className="cog" style={{ "--i": 5 }}></div>
        </>) : console.log(props.wheel)
        }
        {props.wheel === 2 ? (<>
          <div className="cog" style={{ "--i": 0 }}></div>
          <div className="cog" style={{ "--i": 1 }}></div>
          <div className="cog active" style={{ "--i": 2 }}>B</div>
          <div className="cog" style={{ "--i": 3 }}></div>
          <div className="cog" style={{ "--i": 4 }}></div>
          <div className="cog" style={{ "--i": 5 }}></div>
        </>) : console.log(props.wheel)
        }
        {props.wheel === 3 ? (<>
          <div className="cog" style={{ "--i": 0 }}></div>
          <div className="cog" style={{ "--i": 1 }}></div>
          <div className="cog" style={{ "--i": 2 }}></div>
          <div className="cog active" style={{ "--i": 3 }}>B</div>
          <div className="cog" style={{ "--i": 4 }}></div>
          <div className="cog" style={{ "--i": 5 }}></div>
        </>) : console.log(props.wheel)
        }
        {props.wheel === 4 ? (<>
          <div className="cog" style={{ "--i": 0 }}></div>
          <div className="cog" style={{ "--i": 1 }}></div>
          <div className="cog" style={{ "--i": 2 }}></div>
          <div className="cog" style={{ "--i": 3 }}></div>
          <div className="cog active" style={{ "--i": 4 }}>B</div>
          <div className="cog" style={{ "--i": 5 }}></div>
        </>) : console.log(props.wheel)
        }
        {props.wheel === 5 ? (<>
          <div className="cog" style={{ "--i": 0 }}></div>
          <div className="cog" style={{ "--i": 1 }}></div>
          <div className="cog" style={{ "--i": 2 }}></div>
          <div className="cog" style={{ "--i": 3 }}></div>
          <div className="cog" style={{ "--i": 4 }}></div>
          <div className="cog active" style={{ "--i": 5 }}>B</div>
        </>) : console.log(props.wheel)
        }
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={handleCounterclockwiseClick}>Counter clockwise</button>
        <button id="clockwiseBtn" onClick={handleClockwiseClick}>Clockwise</button>
      </div>
    </div>
  )
}

export default connect(st => st, actionCreators)(Wheel);

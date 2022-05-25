import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/action-creators';

export function Wheel(props) {
  const handleCounterclockwiseClick = () => {
    props.moveCounterClockwise();
  }

  const handleClockwiseClick = () => {
    props.moveClockwise();
  }

  return (
    <div id="wrapper">
      <div id="wheel">
        {props.wheel === 0 && (<>
          <div className="cog active" style={{ "--i": 0 }}>B</div>
          <div className="cog" style={{ "--i": 1 }}></div>
          <div className="cog" style={{ "--i": 2 }}></div>
          <div className="cog" style={{ "--i": 3 }}></div>
          <div className="cog" style={{ "--i": 4 }}></div>
          <div className="cog" style={{ "--i": 5 }}></div>
          </>)
        }
        {props.wheel === 1 && (<>
          <div className="cog" style={{ "--i": 0 }}></div>
          <div className="cog active" style={{ "--i": 1 }}>B</div>
          <div className="cog" style={{ "--i": 2 }}></div>
          <div className="cog" style={{ "--i": 3 }}></div>
          <div className="cog" style={{ "--i": 4 }}></div>
          <div className="cog" style={{ "--i": 5 }}></div>
        </>)
        }
        {props.wheel === 2 && (<>
          <div className="cog" style={{ "--i": 0 }}></div>
          <div className="cog" style={{ "--i": 1 }}></div>
          <div className="cog active" style={{ "--i": 2 }}>B</div>
          <div className="cog" style={{ "--i": 3 }}></div>
          <div className="cog" style={{ "--i": 4 }}></div>
          <div className="cog" style={{ "--i": 5 }}></div>
        </>)
        }
        {props.wheel === 3 && (<>
          <div className="cog" style={{ "--i": 0 }}></div>
          <div className="cog" style={{ "--i": 1 }}></div>
          <div className="cog" style={{ "--i": 2 }}></div>
          <div className="cog active" style={{ "--i": 3 }}>B</div>
          <div className="cog" style={{ "--i": 4 }}></div>
          <div className="cog" style={{ "--i": 5 }}></div>
        </>)
        }
        {props.wheel === 4 && (<>
          <div className="cog" style={{ "--i": 0 }}></div>
          <div className="cog" style={{ "--i": 1 }}></div>
          <div className="cog" style={{ "--i": 2 }}></div>
          <div className="cog" style={{ "--i": 3 }}></div>
          <div className="cog active" style={{ "--i": 4 }}>B</div>
          <div className="cog" style={{ "--i": 5 }}></div>
        </>)
        }
        {props.wheel === 5 && (<>
          <div className="cog" style={{ "--i": 0 }}></div>
          <div className="cog" style={{ "--i": 1 }}></div>
          <div className="cog" style={{ "--i": 2 }}></div>
          <div className="cog" style={{ "--i": 3 }}></div>
          <div className="cog" style={{ "--i": 4 }}></div>
          <div className="cog active" style={{ "--i": 5 }}>B</div>
        </>)
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

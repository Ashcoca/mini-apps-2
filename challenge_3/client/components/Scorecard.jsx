import React from 'react';
import Score from './Score.jsx';

const Scorecard = (props) => (
  <div className="scorecard">
      {props.data.map(item => <Score data={item}/>)}
  </div>
);

export default Scorecard;
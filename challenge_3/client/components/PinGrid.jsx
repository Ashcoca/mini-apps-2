import React from 'react';

const Pins = (props) => (
  <div className="pinbox" onClick={props.click}>
    <span className="pins">1</span>
    <span className="pins">2</span>
    <span className="pins">3</span>
    <br/>
    <span className="pins">4</span>
    <span className="pins">5</span>
    <span className="pins">6</span>
    <br/>
    <span className="pins">7</span>
    <span className="pins">8</span>
    <span className="pins">9</span>
    <br/>
    <span className="pins">Gutter</span>
    <span id="bonus" className="pins">Spare</span>
    <span id="bonus" className="pins">Strike</span>
  </div>
);

export default Pins;
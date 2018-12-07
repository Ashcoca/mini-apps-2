import React from 'react';
import Pins from './PinGrid.jsx';

class Bowling extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      score: [],
      pendingScore: 0,
      turn: 1,
      isLoading: true,
      error: null
    }
    this.pinsHit = this.pinsHit.bind(this);
  }

  componentDidMount() {
    
  }

  pinsHit(e) {
    let hit = parseInt(e.target.innerText)
    if (this.state.turn === 1) {
      this.setState({
        pendingScore: hit,
        turn: 2
      });
    };
    if (this.state.turn === 2) {
      hit += this.state.pendingScore;
      this.setState({
        score: this.state.score.concat([hit]),
        turn: 1,
        pendingScore: 0
      });
    };
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div>
          <Pins click={this.pinsHit}/>
        </div>
      )
    } else {
      return (
        <div>
          <img src='https://thumbs.gfycat.com/FaithfulDeafeningBullmastiff-small.gif'></img>
        </div>
      )
    }
  }


}

export default Bowling;



/*
<img class="bowling-ball" src="https://lh3.google.com/u/0/d/0B1-GEHdXK13VcnVGOGh5VmxFM1U=w2560-h1310-iv1"/>
<img class="bowling-pin-1" src="https://lh3.google.com/u/0/d/0B1-GEHdXK13VX0V2Q2g4Ry03RUE=w2560-h1310-iv1"/>

*/
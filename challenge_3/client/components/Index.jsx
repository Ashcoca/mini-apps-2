import React from 'react';
import Pins from './PinGrid.jsx';
import Scorecard from './Scorecard.jsx'

class Bowling extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      score: [],
      pendingScore: 0,
      turn: 1,
      round: 0,
    }
    this.pinsHit = this.pinsHit.bind(this);
    this.bonusPins = this.bonusPins.bind(this);
  }

  pinsHit(e) {
    // if (e.target.innerText === "Strike" || "Spare") {
    //   this.bonusPins();
    //   return;
    // }
    if (this.state.round === 10) {
      alert(`Game Over! You scored ${this.state.score.slice(-1)[0]}`)
    }
    let hit = parseInt(e.target.innerText);
    if (this.state.turn === 1) {
      this.setState({
        pendingScore: hit,
        turn: 2
      });
    };
    if (this.state.turn === 2) {
      hit += this.state.pendingScore;
      hit += this.state.score.slice(-1)[0] || 0;
      this.setState({
        score: this.state.score.concat([hit]),
        turn: 1,
        pendingScore: 0,
        round: this.state.round + 1
      });
    } 
  };

  bonusPins() {

  };

  render() {
    return (
      <div>
        <h2>Enter # of Pins</h2>
        <Pins click={this.pinsHit}/>
        <br/>
        <h5>Pins knocked over: {this.state.pendingScore}</h5>
        <br/>
        <Scorecard data={this.state.score}/>
      </div>
    );
  };
};

export default Bowling;



/*
<img class="bowling-ball" src="https://lh3.google.com/u/0/d/0B1-GEHdXK13VcnVGOGh5VmxFM1U=w2560-h1310-iv1"/>
<img class="bowling-pin-1" src="https://lh3.google.com/u/0/d/0B1-GEHdXK13VX0V2Q2g4Ry03RUE=w2560-h1310-iv1"/>
*/
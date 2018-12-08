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
      gameover: false
    }
    this.pinsHit = this.pinsHit.bind(this);
    this.bonusPins = this.bonusPins.bind(this);
    this.newGame = this.newGame.bind(this);
  }

  pinsHit(e) {
    if (e.target.id === "bonus") {
      return
    }
    if (this.state.round === 10) {
      this.setState({
        gameover: true
      })
    }
    let hit = parseInt(e.target.innerText);
    if (this.state.turn === 1) {
      this.setState({
        pendingScore: hit,
        turn: 2
      });
    };
    if (this.state.turn === 2) {
      if ((hit + this.state.pendingScore) > 10) {
        alert("No cheating! Please enter a valid score!");
        return;
      };
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
    //this is where I should write the actual bowling rules!
  };

  newGame() {
    this.setState({
      score: [],
      turn: 1,
      round: 0,
      gameover: false
    })
  }

  render() {
    if (this.state.gameover) {
      return(
        <div>
          <h1>{`Game Over! You scored ${this.state.score.slice(-1)[0]}.`}</h1>
          <img class="bowling-pin-1" src="https://lh3.google.com/u/0/d/0B1-GEHdXK13VX0V2Q2g4Ry03RUE=w2560-h1310-iv1"/>
          <img class="bowling-ball" src="https://lh3.google.com/u/0/d/0B1-GEHdXK13VcnVGOGh5VmxFM1U=w2560-h1310-iv1"/>
          <br/>
          <button onClick={this.newGame}>Play Again</button>
        </div>
      );
    } if (!this.state.gameover) {
      return (
        <div>
          <h3>Let's Bowl! Select the # of Pins You Hit!</h3>
          <Pins click={this.pinsHit}/>
          <br/>
          <h5>Pins knocked over: {this.state.pendingScore}</h5>
          <br/>
          <Scorecard data={this.state.score}/>
        </div>
      );
    };
  };
}
export default Bowling;

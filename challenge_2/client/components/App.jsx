import React from 'react';
import Chart from './Chart.jsx';

class App extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      labels: [],
      values: [],
      data: null,
      start: null,
      end: null,
      isLoading: true,
      error: null
    }; 
    this.enterDate = this.enterDate.bind(this);
  };

  componentDidMount() {
    fetch('/currentprice')
    .then((response) => response.json())
    .then(data => {
      this.setState({
        labels: Object.keys(data.bpi),
        values: Object.values(data.bpi),
        error: null,
      });
    })
    .catch(error => this.setState({ error, isLoading: false}))
  };

  componentDidUpdate() {
    if (!this.state.isLoading) {
      return;
    } else {
      const chartData = {
        labels: this.state.labels,
        datasets: [
          {
            label: 'Bitcoin Price',
            fill: true,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 20,
            data: this.state.values
          }
        ]
      };
      this.setState({
        data: chartData,
        isLoading: false
      });
    };
  };

  enterDate() {
    console.log(this.state.start)
    console.log(this.start.end)
  };

  render() {
    if (!this.state.isLoading) {
      return (
        <div>
          <Chart data={this.state.data}/>
            <label>Enter start date: 
              <input type="date"></input>
            </label>
            <label> Enter end date: 
              <input type="date"></input>
            </label>

            <h5><a href="https://www.coindesk.com/price/">Powered by CoinDesk</a></h5>
        </div>
      );
    } else {
      return (
        <div>
          <img src='https://thumbs.gfycat.com/FaithfulDeafeningBullmastiff-small.gif'></img>
        </div>
      );
    };
  };
};

export default App;
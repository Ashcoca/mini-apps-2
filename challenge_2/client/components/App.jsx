import React from 'react';
import Chart from './Chart.jsx';

class App extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      labels: [],
      values: [],
      data: [],
      isLoading: true,
      error: null
    }; 
    this.setChartData = this.setChartData.bind(this);

  }

  componentDidMount() {
    fetch('/currentprice')
    .then((response) => response.json())
    .then(data => {
      this.setState({
        labels: Object.keys(data.bpi),
        values: Object.values(data.bpi),
        error: null,
      })
    })
    .catch(error => this.setState({ error, isLoading: false}))
    this.setChartData();
  };

  setChartData() {
    console.log("hello")
    const chartData = {
      labels: this.state.labels,
      datasets: [{
      label: "My First dataset",
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: this.state.values,
      }]
    }
    while(this.state.data.length) {
    this.setState({
      data: chartData,
      isLoading: false
    })
  }
};


  render() {
    if (!this.state.isLoading) {
      return (
        <div>
          <Chart />
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
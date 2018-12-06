import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      data: [],
      isLoading: true,
      error: null
    };
    
  }

  componentDidMount() {
    fetch('/currentprice')
    .then((response) => response.json())
    .then(data => {
      this.setState({
        data: data,
        isLoading: false
      });
    })
    .catch(error => this.setState({ error, isLoading: false}))
  };


  render() {
    if (!this.state.isLoading) {
      return (
        <div>
          Data has been loaded!
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
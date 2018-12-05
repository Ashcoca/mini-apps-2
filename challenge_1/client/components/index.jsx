import React from 'react';
import ReactPaginate from 'react-paginate';

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
    }
  }

  // componentDidMount() {
  //   fetch('/data')
  //   .then(response => response.json())
  //   .then(data => {  

  //   }
  // }

  render() {
    return (
      <div>
        Look I'm for real!
      </div>
    );
  }
}

export default Home;
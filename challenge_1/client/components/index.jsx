import React from 'react';
import ReactPaginate from 'react-paginate';
import List from './List.jsx'


class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      records: [],
      pageCount: null,
      isLoading: true,
      error: null,
      page: 1,
    }
    this.getDataFromServer = this.getDataFromServer.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
  }


  getDataFromServer() {
    fetch(`${this.props.url}?_page=${this.state.page}&_limit=${this.props.perPage}`)
    .then(response => response.json())
    .then(data => {  
      this.setState({
        records: data,
        isLoading: false,
        page: this.state.page + 1,
      });
    })
    .catch(error => this.setState({ error, isLoading: false }));
  };


  componentDidMount() {
    fetch('http://localhost:3000/events')
    .then(response => response.json())
    .then(data => {
      this.setState({
        pageCount: Math.ceil(data.length / 10)
      })
    })
    .catch(error => this.setState({ error, isLoading: false }));

    this.getDataFromServer();
  };

  handlePageClick(data) {
    let selected = data.selected;

    fetch(`${this.props.url}?_page=${selected}&_limit=${this.props.perPage}`)
    .then(response => response.json())
    .then(data => {
      this.setState({
        records: data,
        page: selected
      })
    })
    .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    if (this.state.records.length > 1) {
      return (
        <div>
          <Search />
          <List data={this.state.records}/>
          <ReactPaginate previousLabel={"previous"}
                       nextLabel={"next"}
                       breakLabel={"..."}
                       breakClassName={"break-me"}
                       pageCount={this.state.pageCount}
                       marginPagesDisplayed={2}
                       pageRangeDisplayed={5}
                       onPageChange={this.handlePageClick}
                       containerClassName={"pagination"}
                       subContainerClassName={"pages pagination"}
                       activeClassName={"active"} />
        </div>
      )
    } else {
      return (
        <div>
          <img src='https://thumbs.gfycat.com/FaithfulDeafeningBullmastiff-small.gif'></img>
        </div>
      );
    }
  };
};

export default Home;
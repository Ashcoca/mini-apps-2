import React from 'react';
import ReactPaginate from 'react-paginate';
import List from './List.jsx';
import Search from './Search.jsx';


class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      records: [],
      pageCount: null,
      search: '',
      isLoading: true,
      error: null,
    }
    this.handlePageClick = this.handlePageClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:3000/events')
    .then(response => response.json())
    .then(data => {
      this.setState({
        pageCount: Math.ceil(data.length / 10)
      })
    })
    .catch(error => this.setState({ error, isLoading: false }));

    this.handlePageClick(1);
  };

  handlePageClick(data) {
    let selected = data.selected 

    fetch(`${this.props.url}?_page=${selected}&_limit=${this.props.perPage}`)
    .then(response => response.json())
    .then(data => {
      this.setState({
        records: data,
      })
    })
    .catch(error => this.setState({ error, isLoading: false }));
  }

  //Why does this work?
  handleChange(e) {
    let newState = this.state;
    let query = e.target.value;
    newState.search = query
  };

  handleSubmit(e) {
    e.preventDefault();

    fetch(`${this.props.url}?q=${this.state.search}&_limit=10`)
    .then(response => response.json())
    .then(data => {
      this.setState({
        records: data
      })
    })
    .catch(error => this.setState({ error, isLoading: false }));
  }


  render() {
    if (this.state.records.length > 1) {
      return (
        <div>
          <Search submit={this.handleSubmit} input={this.handleChange}/>
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
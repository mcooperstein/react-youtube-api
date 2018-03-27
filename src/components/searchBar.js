import React, {Component} from 'react';

class SearchBar extends Component{
  constructor(props){
    super(props);

    this.state = { term: ''};
    this.onInputChange = this.onInputChange.bind(this);
  }
  render(){
    return (
    <div id="searchBarDiv">
      <input id="searchBar" placeholder="Enter Search Term" onChange={this.onInputChange} value={this.state.term}/>
      <button className="btn btn-primary btn-sm">Search</button>
      {/* <p>Value of the input: {this.state.term}</p> */}
    </div>
  );
  }
  onInputChange(event){
    //console.log(event.target.value);
    this.setState({
      term: event.target.value
    })
  }
};

export default SearchBar;

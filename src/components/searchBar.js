import React, {Component} from 'react';

class SearchBar extends Component{
  constructor(props){
    super(props);

    this.state = { term: ''};
    this.onInputChange = this.onInputChange.bind(this);
  }
  render(){
    return (
    <div id="searchBarDiv" className="search-bar">
      <input id="searchBar" placeholder="Enter Search Term" onChange={event => this.onInputChange(event.target.value)} value={this.state.term}/>
      {/* <button className="btn btn-primary btn-sm">Search</button> */}
    </div>
  );
  }
  onInputChange(term){
    //console.log(event.target.value);
    this.setState({
      term: term
    });
    this.props.onSearchTermChange(term);
  }
};

export default SearchBar;

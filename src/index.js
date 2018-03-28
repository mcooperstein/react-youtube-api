import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/searchBar';
import VideoList from './components/videoList';
import VideoDetail from './components/videoDetail';

const API_KEY = "AIzaSyCMLli-_yMETaayIelMFscGxox9A1cbgGA";

// Sample Search
// YTSearch({key: API_KEY, term: 'surfing'}, function(data){
//   console.log(data);
// })

class App extends Component{
  constructor(props){
    super(props);

    this.state = {videos:[]};

    YTSearch({key: API_KEY, term: 'NBA Top Plays'}, (data)=>{
      this.setState({videos:data});
    })
  }
  render(){
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]}/>
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
};

ReactDOM.render(<App/>, document.querySelector('.container'));

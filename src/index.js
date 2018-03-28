import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

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

    this.state = {
      videos:[],
      selectedVideo:null
    };

    this.videoSearch('NBA Top Plays');
  }
  videoSearch(term){
    YTSearch({key: API_KEY, term: term}, (data)=>{
      this.setState({
        videos:data,
        selectedVideo: data[0]
      });
    })
  }
  render(){
    // throttle search by 300ms -> can only run every 300ms
    const videoSearch = _.debounce((term)=> {this.videoSearch(term)},300);

    return (
      <div>
        <h1 className="project-heading">React <img className="logo" src="./images/yt-logo.png"/> API Project</h1>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})} videos={this.state.videos}/>
      </div>
    );
  }
};

ReactDOM.render(<App/>, document.querySelector('.container'));

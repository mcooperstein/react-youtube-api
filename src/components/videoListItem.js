import React, {Component} from 'react';

// const VideoListItem = (props) => {
//     const video = props.video;
const VideoListItem = ({video}) => {
    const imageUrl = video.snippet.thumbnails.default.url;
    const videoTitle = video.snippet.title;
    return(
      <div>
        <li className="list-group-item">
        <div className="video-list media">
          <div className="media-left">
            <img src={imageUrl} className="media-object" />
          </div>

          <div className="media-body">
            <div className="media-heading">{videoTitle}</div>
          </div>
        </div>
      </li>
      </div>
    )
}

export default VideoListItem;

import React from 'react';
import styles from '../styles/main';

const VideoListItem = ({video, onVideoSelect}) => {
  const imageURL = video.snippet.thumbnails.default.url;

  return (
    <li onClick={this.onVideoSelect(video)} style={styles.li}> 
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageURL} />
        </div>

        <div className="media-body">
          <div className="media-heading"> {video.snippet.title} </div>
        </div>
      </div>  
    </li>
  )
};

module.exports = VideoListItem;

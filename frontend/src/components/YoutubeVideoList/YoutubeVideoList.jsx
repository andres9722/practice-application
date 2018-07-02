import React from 'react'
import { YoutubeConsumer } from '../../providers/YoutubeProvider.jsx'

const YoutubeVideoList = () => (
  <YoutubeConsumer>
    {({state, onVideoSelect}) => (
      <ul className='youtube__list'>
        {
          state.videos.map(video => (
            <li key={video.snippet.thumbnails.high.url} onClick={() => onVideoSelect(video)} className='youtube__item'>
              <div className='youtube__select'>
                <img className='youtube__img' src={video.snippet.thumbnails.high.url} />
              </div>
              <div className=''>
                {video.snippet.title}
              </div>
            </li>
          ))
        }
      </ul>
    )}
  </YoutubeConsumer>
)

export default YoutubeVideoList

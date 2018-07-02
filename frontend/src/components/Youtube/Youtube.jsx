import React from 'react'
import './Youtube.scss'
import YoutubeSearchBar from '../YoutubeSearchBar/YoutubeSearchBar.jsx'
import YoutubeVideoDetail from '../YoutubeVideoDetail/YoutubeVideoDetail.jsx'
import YoutubeVideoList from '../YoutubeVideoList/YoutubeVideoList.jsx'

const Youtube = () => (
  <div className='l-container youtube'>
    <YoutubeSearchBar />
    <div className='youtube__container'>
      <YoutubeVideoDetail />
      <YoutubeVideoList />
    </div>
  </div>
)

export default Youtube

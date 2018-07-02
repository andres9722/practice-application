import React, { Fragment } from 'react'
import { YoutubeConsumer } from '../../providers/YoutubeProvider.jsx'

const YoutubeVideoDetail = () => (
  <YoutubeConsumer>
    {({state}) => (
      <Fragment>
        {
          !state.selectedVideo
          ? <p>Loading...</p>
          : (
            <section className='youtube__selected'>
              <div className='youtube__video'>
                <iframe className='youtube__frame' src={`https://www.youtube.com/embed/${state.selectedVideo.id.videoId}`} />
              </div>
              <div className='youtube__info'>
                <h1 className='youtube__title'>{state.selectedVideo.snippet.title}</h1>
                <h4 className='youtube__subtitle'>Description</h4>
                <div className='youtube__description'>{state.selectedVideo.snippet.description}</div>
              </div>
            </section>
          )
        }
      </Fragment>
    )}
  </YoutubeConsumer>
)

export default YoutubeVideoDetail

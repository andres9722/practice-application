import React, { Fragment } from 'react'
import { YoutubeConsumer } from '../../providers/YoutubeProvider.jsx'

const YoutubeSearchBar = () => (
  <YoutubeConsumer>
    {({state, onSearchTermChange}) => (
      <Fragment>
        <input className='youtube__input' type='text' placeholder='Search' value={state.term} onChange={e => (onSearchTermChange(e.target.value))} />
      </Fragment>
    )}
  </YoutubeConsumer>
)

export default YoutubeSearchBar

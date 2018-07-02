import React, { createContext, Component } from 'react'
import YTSearch from 'youtube-api-search'

const API_KEY = 'AIzaSyBkYZoFpfwQXBUXrhGGNEUGIMHYf-UXz7c'

const { Provider, Consumer } = createContext({
  videos: [],
  selectedVideo: null,
  term: ''
})

export class YoutubeProvider extends Component {
  constructor (props) {
    super(props)

    this.state = {
      videos: [],
      selectedVideo: null
    }

    this.videoSearch = this.videoSearch.bind(this)
    this.onSearchTermChange = this.onSearchTermChange.bind(this)
    this.onVideoSelect = this.onVideoSelect.bind(this)

    this.videoSearch('mierda')
  }

  videoSearch (term) {
    YTSearch({key: API_KEY, term}, videos => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      })
    })
  }

  onSearchTermChange (term) {
    this.videoSearch(term)
  }

  onVideoSelect (selectedVideo) {
    this.setState({selectedVideo})
  }

  render () {
    return (
      <Provider value={{state: this.state,
        onSearchTermChange: this.onSearchTermChange,
        videoSearch: this.videoSearch,
        onVideoSelect: this.onVideoSelect }} >
        {this.props.children}
      </Provider>
    )
  }
}

export const YoutubeConsumer = Consumer

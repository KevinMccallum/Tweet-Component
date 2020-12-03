import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Tweet from './Components/Tweet'

const data = {
  message: 'React is awesome!',
  gravatar: '64cf179feb1a8fd72801f4f1986bdb47',
  author: {
    handle: 'kevingmc_',
    name: 'Kevin McCallum',
  },
  likes: 10,
  retweets: 20,
  timestamp: '2020-12-02 21:24:37',
}

ReactDOM.render(
  <React.StrictMode>
    <Tweet tweet={data} />
  </React.StrictMode>,
  document.getElementById('root')
)

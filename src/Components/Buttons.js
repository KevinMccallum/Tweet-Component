import React from 'react'

export const ReplyButton = () => <i className="fa fa-reply reply-button"></i>

const getRetweetCount = (count) => {
  if (count > 0) {
    return <span className="retweet-count">{count}</span>
  }
  return null
}

export const RetweetButton = ({ count }) => (
  <span className="retweet-button">
    <i className="fa fa-retweet"></i>
    {getRetweetCount(count)}
  </span>
)

export const LikeButton = ({ count }) => (
  <span className="like-button">
    <i className="fa fa-heart"></i>
    {count > 0 && <span className="like-count">{count}</span>}
  </span>
)

export const MoreOptionsButton = () => <i className="fa fa-ellipsis-h more-options-button"></i>

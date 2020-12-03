import React from 'react'

function Avatar({ gravatar }) {
  const url = `https://www.gravatar.com/avatar/${gravatar}`
  return <img alt="avatar" className="avatar" src={url} />
}

export default Avatar

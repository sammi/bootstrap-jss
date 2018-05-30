import React from 'react'

export const EmbeddedContent = () => <div>
  <h1>Embedded content</h1>

  <h3>audio</h3>

  <audio controls></audio>
  <audio></audio>

  <h3>img</h3>

  <img src="https://lorempixel.com/100/100" alt="" />
  <a href="#"><img src="https://lorempixel.com/100/100" alt="" /></a>

  <h3>svg</h3>

  <svg width="100px" height="100px">
    <circle cx="100" cy="100" r="100" fill="#ff0000" />
  </svg>

  <h3>video</h3>

  <video controls></video>
  <video></video>
</div>

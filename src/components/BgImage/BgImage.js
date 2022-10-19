import React from 'react'
import './BgImage.css'
import { Parallax } from 'react-parallax'
const BG_image = () => {
  return (
    <div className="bg__image_container">
      <Parallax bgImage="bg_image.webp" strength={500}>
        <div style={{ height: 550 }}>
          <div>Jou</div>
        </div>
      </Parallax>
    </div>
  )
}

export default BG_image

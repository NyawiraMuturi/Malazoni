import React, {useRef} from 'react'
import useSlider from '../../hooks/useSlider'
import axios from 'axios'

const Banner = ({images}) => {

  const slideImage = useRef(null)
  const slideText = useRef(null)
  const { goToPreviousSlide, goToNextSlide } = useSlider(
    slideImage,
    slideText,
    images
  )

  return (
    <div>
    <div class="p-5" ref={slideImage}>
      <div className="slider--content">
        <button onClick={goToPreviousSlide} className="slider__btn-left">
         Previous
        </button>
        <div className="slider--feature">
          <h1 className="feature--title">Dreaming</h1>
          <p ref={slideText} className="feature--text"></p>
          <button className="feature__btn">Get started</button>
        </div>
        <button onClick={goToNextSlide} class="slider__btn-right">
          Next
        </button>
      </div>
    </div>

    </div>
  )
}

export default Banner
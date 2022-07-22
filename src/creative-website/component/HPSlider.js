import React, { useState } from 'react'
import Image1 from '../assests/img-1.jpg';
import Image2 from '../assests/img-2.jpg';
import Image3 from '../assests/img-3.jpg';

const HPSlider = () => {
  const [img, setImg] = useState(0);

  const slideImages = [
    {
      url: Image1,
      caption: 'Slide 1'
    },
    {
      url: Image2,
      caption: 'Slide 2'
    },
    {
      url: Image3,
      caption: 'Slide 3'
    },
  ];
  const prevBtnClick = () => {
    if (img - 1 == -1) {
      setImg(slideImages.length - 1)
    } else {
      setImg(img - 1)
    }
  }

  const nextBtnClick = () => {
    if (img + 1 == slideImages.length) {
      setImg(0)
    } else {
      setImg(img + 1)
    }
  }
  return (
    <div className="slide-container">
      <button className="prev-btn" onClick={prevBtnClick}>Prev</button>
      <img src={slideImages[img].url} alt="img1" style={{ "height": "300px", "width": "90%", "marginLeft": "50px", "marginRight": "50px" }}></img>
      <button className="next-btn" onClick={nextBtnClick}>Next</button>
    </div>
  )
}

export default HPSlider;
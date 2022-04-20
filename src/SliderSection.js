import React from 'react';
import img1 from './blog_image.png';
import img2 from './miller-backup.png';
import img3 from './mobile-quickview.png';
class SliderSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index:0,
      galleryList:[img1,img2,img3]
    }
  }

  onClickNext = () => {
    if (this.state.index +1 === this.state.galleryList.length) {
      this.setState({
        index : 0
      })
    } else {
      this.setState({
        index : this.state.index +1
      })
    }
  }
  onClickPrev = () => {
    if (this.state.index -1 === -1) {
      this.setState({
        index : 0
      })
    } else {
      this.setState({
        index: this.state.index -1
      })
    }
  }

  render() {
    return <div className="homepage-slider">
      <h1>Image gallery</h1>
      <img className="slider-image" src={this.state.galleryList[this.state.index]} alt="img{this.state.galleryList[this.state.index]}"/>
      <button className="prev-btn" onClick={this.onClickPrev}>Prev</button>
      <button className="next-btn" onClick={this.onClickNext}>Next</button>
      </div>;
  }
}


export default SliderSection;
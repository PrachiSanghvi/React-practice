import img1 from './blog_image.png';
import img2 from './miller-backup.png';
import img3 from './mobile-quickview.png';
import './App.css';
import React,{ useState , Component } from 'react';

class ImageGallery extends Component {
  state = {
    index : 0,
    picList :[img1,img2,img3]
  }
  onClickNext = () => {
    if(this.state.index +1 == this.state.picList.length) {
      this.setState({
        index :0
      })
    } else {
      this.setState ({
        index :this.state.index + 1
      })
    }
  }
  onClickPrev = () => {
    if(this.state.index - 1 === -1) {
      this.setState({
        index :this.state.picList.length - 1
      })
    } else {
      this.setState ({
        index :this.state.index - 1
      })
    }
  }
  render() {
    return(
      <div>
        <img src={this.state.picList[this.state.index]} style={{"height":"200px","width":"200px"}}></img><br/>
        <button style={{"fontSize":"18px"}} onClick={this.onClickPrev}>Previous</button>
        <button style={{"fontSize":"18px","marginLeft":"20px"}} onClick={this.onClickNext}>Next</button>
      </div>
    )
  }
}

export default ImageGallery ;
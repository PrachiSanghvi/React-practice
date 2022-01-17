import React from 'react';
import './Popup.css'

class PopupElement extends React.Component {
  render() {
    return (
      <div className="popup">
        <div className="popup_inner">
          <h1>{this.props.text}</h1>
          <h6>Welcome to the React js POPUP</h6>
          <button onClick={this.props.closePopup}>Close me</button>
        </div>
      </div>
    )
  }
}
class PopUp extends React.Component {
  constructor() {
    super();

    this.state = {
      showPopup: false
    };
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    })
  }

  render() {
    return (<div className="popup-mainclass">
      <h1>Welcome to popup example</h1>
      <button onClick={this.togglePopup.bind(this)}>Show popup</button>
      <button onClick={() => {
        alert("clicked");
      }} >Alert Box</button>

      {this.state.showPopup ? <PopupElement text='React Learning' closePopup={this.togglePopup.bind(this)} /> : null}
    </div>
    )
  }
}

export default PopUp;
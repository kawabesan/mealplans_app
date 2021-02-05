import React, { Component } from "react";



class RandomMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ramget: '',
    }
    this.doAction = this.doAction.bind(this);
  }


  doAction() {
    this.setState({
      ramget: this.props.ramplan,
    })
  }



  render() {
    return(
      <div className="rambox">
        <div className="ram-text">
        <h2>今日の晩ご飯は...</h2>
        <div className="ramtex-box">
        <span>{this.state.ramget}</span>
        </div>
          
        </div>
        <button className="rambtn" onClick={this.doAction}>決める！</button>
      </div>
    )
  }
}

export default RandomMenu;
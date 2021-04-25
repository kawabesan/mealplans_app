import { Component } from "react";

class RandomMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ramplan: "",
    };
    this.doAction = this.doAction.bind(this);
    this.ramPlan = this.ramPlan.bind(this);
  }

  ramPlan = () => {
    if (this.props.plans.length === 0) {
      return;
    }
    let data = this.props.plans;
    let ramNum = Math.floor(Math.random() * data.length);
    let newplan = data[ramNum].plan;
    this.setState({
      ramplan: newplan,
    });
  };

  doAction = () => {
    this.setState({
      ramget: this.props.ramplan,
    });
  };

  render() {
    return (
      <div className="rambox">
        <div className="ram-text">
          <h2>今日の晩ご飯は...</h2>
          <div className="ramtex-box">
            {this.props.plans === null || this.props.plans.length === 0 ? (
              <span>メニューを入力してください</span>
            ) : (
              <span>{this.state.ramplan}</span>
            )}
          </div>
        </div>
        <button className="rambtn" onClick={this.ramPlan}>
          決める！
        </button>
      </div>
    );
  }
}

export default RandomMenu;

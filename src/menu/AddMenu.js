import React, { Component } from "react";
import MenuItem from './menus/MenuItem';


class AddMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plan_str: '',
    }
    this.doChange = this.doChange.bind(this);
    this.doSubmit = this.doSubmit.bind(this);
  }

  doChange = (e) => {
    this.setState({
      plan_str: e.target.value,
    })
  }

  doSubmit = (e) => {
    e.preventDefault();
    this.props.AddPlan(this.state.plan_str);
    this.setState({
      plan_str: ''
    })
  }


  render() {
    return(
      <div className="menus">

      
      <div className="add-box">
          <label for="addplan" className="add-label">メニューを追加</label>
        <form onSubmit={this.doSubmit}>
          <input className="add-tex" id="addplan" type="text" placeholder="メニューを入力" onChange={this.doChange} value={this.state.plan_str}/>
          <input type="submit" value="追加" className="add-btn" />
        </form>
        </div>
        <table className="menu-list">
          <tbody>
            {
              this.props.plans.map(val => (
                <MenuItem key={val.id} plans={val} delPlan={this.props.delPlan}/>
                )
              )
            }
          </tbody>
        
        </table>
      
      </div>
    )
  }
}


export default AddMenu;
import React, { Component } from "react";

class MenuItem extends Component {
  render() {
    const {id, plan} = this.props.plans;
    return(
      <tr className="menu-item" key={id}>
        <td className="plan-td">{plan}</td>
        <td className="btn-td">
          <button className="del-btn" onClick={this.props.delPlan.bind(this,id)}>削除</button>
          </td>
      </tr>
    )
  }
}

export default MenuItem;
import React, { Component } from "react";
import './App.scss';
import { firebaseDb } from "./fire";
import AddMenu from "./menu/AddMenu";
import RandomMenu from "./menu/RandomMenu";

class App extends Component {

  constructor() {
    super();
    this.state = {
      plans: [],
      ramplan: ''
    }
      this.loadFire();
      this.AddPlan = this.AddPlan.bind(this)
  }



  loadFire = async() => {
    const data = this.state.plans;
    let ref = firebaseDb.ref('plans/');
    await ref.on('child_added', snap => {
        data.push({
          id: snap.key,
          plan: snap.val().plan,
        });
        this.setState({
          plans: data
        });
      })
    await ref.on('child_removed', snap => {
      for (let i = 0; i < data.length; i++){
        if(data[i].id === snap.key) {
          data.splice(i, 1);
        }
      }
      this.setState({
        plans: data,
      })
    })
    await ref.once('value').then(snap => {
      return snap.val()
    })
    this.loadPlan(data)
  }

  loadPlan(data) {
    let ramNum = Math.floor(Math.random() * data.length);
    this.ramPlan(data[ramNum])
  }

  ramPlan = (data) => {
    console.log(data.plan)
    this.setState({
      ramplan: data.plan,
    })
  }

  delPlan = (id) => {
    let ref = firebaseDb.ref('plans');
    ref.child(id).remove();
    }

  AddPlan = (plan) => {
    let ref = firebaseDb.ref('plans/');
    ref.push().set({plan: plan});
  }

  render() {
    return(
      <div className="wrapper">
        <h1>今日の晩ご飯！</h1>
        <RandomMenu ramplan={this.state.ramplan} ramPlan={this.ramPlan}/>
        <AddMenu plans={this.state.plans} delPlan={this.delPlan} AddPlan={this.AddPlan}/>
      </div>
    )
  }
}

export default App;

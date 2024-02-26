
import React, { Component } from 'react';
import Us_Compo from './Us_Compo';
import Us_Compo1 from './Us_Compo1';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      nationality: "Pakistani"
    }
  }
  changeClick() {
    this.setState({
      nationality: "Muslim"
    })
  }
  render() {
    return (
      <>
        <div>
          <h2>I am {this.state.nationality} </h2>
          <button type="button" onClick={() => { this.changeClick()}}>Click-Me</button>
         <Us_Compo />
         <Us_Compo1 />
        </div>
        
      </>
    )
  }
}
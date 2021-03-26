import React, { Component } from 'react'
import { Context } from '../Context';
import ContextTypePage from './ContextTypePage'

export default class ContextPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      theme :{themeColor:'red'}
    }
  }

  render() {
    const {theme} = this.state
    console.log(this.state);
    return (
      <div>
        <h1>ContextPage</h1>
        <Context.Provider value={theme}>
          <ContextTypePage></ContextTypePage>
        </Context.Provider>
      </div>
    )
  }
}

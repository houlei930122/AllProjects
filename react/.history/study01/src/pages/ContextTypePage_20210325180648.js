import React, { Component } from 'react'
import { Context, UserContext } from '../Context';

export default class ContextTypePage extends Component {

  static contextType = Context
  static contextType = UserContext
   //只生效了最后一个 contextType
  render() {
    const { themeColor,name} = this.context
    console.log('contextType',this.context);
    return (
      <div>
        <h1>ContextTypePage  {themeColor} {name}</h1>
      </div>
    )
  }
}

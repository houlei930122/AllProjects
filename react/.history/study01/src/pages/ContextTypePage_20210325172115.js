import React, { Component } from 'react'

export default class ContextTypePage extends Component {

  static contextType = Context

  render() {
    const { themeColor} = this.context
    console.log('contextType',this.context);
    return (
      <div>
        <h1>ContextTypePage</h1>
      </div>
    )
  }
}

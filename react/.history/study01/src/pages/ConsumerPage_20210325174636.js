import React, { Component } from 'react'
import { Context } from '../Context'

export default class ConsumerPage extends Component {
  render() {
    return (
      <div>
        <h1>ConsumerPage</h1>

        <Context.Consumer>
          {
            theme=>{
              return <p> {theme.themeColor}</p>
            }
          }
        </Context.Consumer>

      </div>
    )
  }
}

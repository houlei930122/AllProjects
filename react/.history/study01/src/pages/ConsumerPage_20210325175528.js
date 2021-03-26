import React, { Component } from 'react'
import { Context, UserContext } from '../Context'

export default class ConsumerPage extends Component {
  render() {
    return (
      <div>
        <h1>ConsumerPage</h1>

        <Context.Consumer>
          {
            theme=>{
              return <div>
                <p> {theme.themeColor}</p>
                <UserContext.Consumer>
                  {user => <User {...user} />}
                </UserContext.Consumer>

              </div> 
            }
          }
        </Context.Consumer>

      </div>
    )
  }
}
function User({name}}) {
  return <div>{name}</div>
}
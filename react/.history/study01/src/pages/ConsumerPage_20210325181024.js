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
                {/* 有多个provider的时候，使用需要嵌套 */}
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
function User({name}) {
  return <div>{name}</div>
}
import React, { Component } from 'react'
import { Context, UserContext } from '../Context';
import ConsumerPage from './ConsumerPage';
import ContextTypePage from './ContextTypePage'
import UseContextPage from './UseContextPage';
export default class ContextPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: { themeColor: 'red' },
      user: { name: '小明' }
    }
  }
  render() {
    const { theme ,user} = this.state
    return (
      <div>
        <h1>ContextPage</h1>
        <Context.Provider value={theme}>
          <UserContext.Provider value={user}>
            <ContextTypePage />
            <UseContextPage />
            <ConsumerPage/>
          </UserContext.Provider>
        </Context.Provider>
      </div>
    )
  }
}

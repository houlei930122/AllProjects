import React from 'react'
import { Context, UserContext } from '../Context';
export default function UseContextPage() {
  const theme = React.useContext(Context)
  const user = React.useContext(UserContext)
  // 都生效，React.useContext只在函数组件和自定hook中使用
  return (
    <div>
      <h3>{theme.themeColor} {user.name}</h3>
    </div>
  )
}

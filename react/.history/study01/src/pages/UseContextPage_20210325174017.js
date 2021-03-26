import React from 'react'
import { Context, UserContext } from '../Context';
export default function UseContextPage() {
  const theme = React.useContext(Context)
  const user = useContext(UserContext)
  return (
    <div>
      <h3>{theme.themeColor} {user.name}</h3>
    </div>
  )
}

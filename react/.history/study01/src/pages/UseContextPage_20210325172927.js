import React from 'react'
import { Context } from '../Context';
export default function UseContextPage() {
  const theme = React.useContext(Context)
  return (
    <div>
      <h3>theme</h3>
    </div>
  )
}

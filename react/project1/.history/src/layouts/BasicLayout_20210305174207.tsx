import React, { useEffect } from 'react'

interface BasicLayoutProps {}
const BasicLayout:React.FC<BasicLayoutProps> = props => {
  const {children} = props

  useEffect(() => {},[])
  return <div>
      {children}
    </div>
}

export default BasicLayout
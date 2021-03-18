import BottomNav from '@/components/BottomNav'
import React, { useEffect } from 'react'
import '@/static/iconfont/iconfont.css'
import styles from './BasicLayout.less'


interface BasicLayoutProps {}
const BasicLayout:React.FC<BasicLayoutProps> = props => {
  const {children} = props

  useEffect(() => {},[])
  return <div>
      <article>{children}</article> 
      <BottomNav></BottomNav>
    </div>
}

export default BasicLayout
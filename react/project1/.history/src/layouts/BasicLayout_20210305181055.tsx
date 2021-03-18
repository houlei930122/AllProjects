import BottomNav from '@/components/BottomNav'
import React, { useEffect } from 'react'
import '@/static/iconfont/iconfont.css'
import styles from './BasicLayout.less'
import { Location } from 'umi'


interface BasicLayoutProps {
  location:Location;
}
const BasicLayout:React.FC<BasicLayoutProps> = props => {
  const {children,location} = props
  console.log(location);
  useEffect(() => {},[])
  const {pathname} = location
  return <div className={styles.main}>
      <article>{children}</article> 
      <BottomNav pathname={pathname}></BottomNav>
    </div>
}

export default BasicLayout
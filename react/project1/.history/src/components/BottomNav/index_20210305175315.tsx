import React, { Component } from 'react'
import { TabBar } from 'antd-mobile';
const menu = [
  {
    title: '首页',
    link: '/',
    icon: 'shouye',
  },
  {
    title: '购物车',
    link: '/cart',
    icon: '3',
  },
  {
    title: '订单列表',
    link: '/olist',
    icon: 'icon-',
  },
  {
    title: '我的',
    link: '/user',
    icon: 'wode',
  },
];


export default class BottomNav extends Component {
  render() {
    return (
      <TabBar>

      </TabBar>
    )
  }
}

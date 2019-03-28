import { ComponentClass } from 'react'
import Taro, { Component } from '@tarojs/taro'
import { View, ScrollView } from '@tarojs/components'
// import { connect } from '@tarojs/redux'

// import { add, minus, asyncAdd } from '../../actions/counter'

import './index.scss'
import {func} from "prop-types";

type PageStateProps = {
  counter: {
    num: number
  }
}

type PageDispatchProps = {
  add: () => void
  dec: () => void
  asyncAdd: () => any
}

type PageOwnProps = {}

type PageState = {}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Index {
  props: IProps;
}

// @connect(({ counter }) => ({
//   counter
// }), (dispatch) => ({
//   add () {
//     dispatch(add())
//   },
//   dec () {
//     dispatch(minus())
//   },
//   asyncAdd () {
//     dispatch(asyncAdd())
//   }
// }))
class Index extends Component {
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }
  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const ul = [
      {name:'推荐',url:''},
      {name:'后端',url:''},
      {name:'前端',url:''},
      {name:'Android',url:''},
      {name:'IOS',url:''},
      {name:'人工智能',url:''},
      {name:'开发工具',url:''},
      {name:'代码人生',url:''},
      {name:'阅读',url:''},
    ]
    let ulList = []
    ul.forEach(function () {
      
    })
    return (
      <ScrollView
        className='scrollview'
        scrollX>
        {ulList}
      </ScrollView>
    )
  }
}

// #region 导出注意
//
// 经过上面的声明后需要将导出的 Taro.Component 子类修改为子类本身的 props 属性
// 这样在使用这个子类时 Ts 才不会提示缺少 JSX 类型参数错误
//
// #endregion

export default Index as ComponentClass<PageOwnProps, PageState>

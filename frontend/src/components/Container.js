import React, { Component } from 'react'

export default class Container extends Component {
    render() {
        return (
            <view
            style={{
              flexDirection: 'row',
              height: 100,
              padding: 20,
            }}>
            <view style={{backgroundColor: 'blue', flex: 0.3}} />
            <view style={{backgroundColor: 'red', flex: 0.5}} />
            <text>Hello World!</text>
          </view>
        )
    }
}

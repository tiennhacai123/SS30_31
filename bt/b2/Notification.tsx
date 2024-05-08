import React, { Component } from 'react'

export default class Notification extends Component {
    componentWillMount(): void {
        console.log("Component đã được mount!");
    }
  render() {
    return (
      <div>
        <b>Ex02</b><br />
        <b>Notification</b>
      </div>
    )
  }
}

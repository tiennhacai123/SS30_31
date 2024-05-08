import React, { Component } from 'react'
interface Props{

}
interface State{
    username:string,
}
export default class Ex01 extends Component<Props,State> {
    constructor(props: Props){
        super(props);
        this.state = {
            username: 'le dien tien'
        }

    }
  render() {
    return (
      <div>
       <b>Ex01</b><br />
        {this.state.username}
      </div>
    )
  }
}

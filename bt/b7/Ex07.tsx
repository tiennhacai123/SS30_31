import { Component } from 'react';

export default class Ex07 extends Component {
  componentDidMount() {
    document.title = "New Title";
  }
  render() {
    return (
      <div>
        <b>Ex07</b>
        <p>doi ten trinh duyet app</p>
      </div>
    );
  }
}


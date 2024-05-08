import { Component } from 'react';

interface Props{
  time: string;
}

interface State{
  time: Date;
}

export default class Ex09 extends Component<Props, State> {
  timerID: number;
  constructor(props: Props, timerID: number) {
    super(props);
    this.timerID = timerID; 
    this.state = {
      time: new Date()
    };
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      time: new Date()
    });
  }
  render() {
    return (
      <div>
        <b>Ex09</b>
        <p>Thoi gian hien tai: {this.state.time.toLocaleTimeString()}</p>
      </div>
    );
  }
}
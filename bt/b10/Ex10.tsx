import { Component } from 'react';

interface Props{
  count: number;
}
interface State {
  count: number;
}
 export default class Ex10 extends Component<Props, State> {
  intervalID: number;
  constructor(props: Props, intervalID: number) {
    super(props);
    this.intervalID = intervalID
    this.state = {
      count: 0
    };
  }
  componentDidMount() {
    this.intervalID = setInterval(() => this.incrementCount(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  incrementCount() {
    this.setState((prevState) => ({
      count: (prevState.count + 1) % 11
    }));
  }
  render() {
    return (
      <div>
        <b>Ex10</b>
        <h3>Counter: {this.state.count}</h3>
      </div>
    );
  }
}
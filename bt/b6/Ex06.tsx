import { Component } from 'react';

interface Props{
  message: string;
}

interface State{
  message: string;
}

class MyComponent extends Component<Props, State> {
  shouldComponentUpdate(nextProps: Props){
    return nextProps.message !== this.props.message;
  }
  render() {
    const { message } = this.props;
    return (
      <div>
        <b>Ex06</b>
        <h3>Message: {message}</h3>
      </div>
    );
  }
}

export default class Ex06 extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      message: "Interface rendering"
    };
  }
  handleClick = () => {
    this.setState({
      message: "Interface rendering"
    });
    console.log(this.state.message);
  };
  render() {
    return (
      <div>
        <MyComponent message={this.state.message} />
        <button onClick={this.handleClick}>Update Message</button>
      </div>
    );
  }
}


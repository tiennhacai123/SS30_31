import React, { Component } from 'react';

interface Props {
  slogan: string;
}

interface State {
  slogan: string;
}

export default class Ex04 extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      slogan: 'Học code để đi làm',
    };
  }

  handleChange = () => {
    this.setState((prevState: State) => ({
      slogan: 'Học code để làm',
    }));
  };

  shouldComponentUpdate(nextProps: Props, nextState: State) {
    return true;
  }

  render() {
    return (
      <div>
        <b>Ex04</b>
        <h3>Slogan: {this.state.slogan}</h3>
        <button onClick={this.handleChange}>Change state</button>
      </div>
    );
  }
}
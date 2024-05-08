import { Component } from 'react';

interface Props {
  data: string;
}

interface State {
  newData: string;
}

class MyComponent extends Component<Props> {
  render() {
    const { data } = this.props;

    return (
      <div>
        <b>Ex05</b>
        <h3>Status: {data}</h3>
      </div>
    );
  }
}

export default class Ex05 extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      newData: "Open the form"
    };
  }

  updateData = () => {
    this.setState({
      newData: "Close the form"
    });
  };

  render() {
    return (
      <div>
        <MyComponent data={this.state.newData} />
        <button onClick={this.updateData}>Update Data</button>
      </div>
    );
  }
}


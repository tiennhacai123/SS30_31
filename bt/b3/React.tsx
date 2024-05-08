import { Component, MouseEventHandler } from 'react'

interface Props {
  company: string
}

interface State {
  company: string
}

export default class React extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      company: "Rikkei Academy"
    }
  }
  changeCompany: MouseEventHandler<HTMLButtonElement> = () =>{
    this.setState({
      company: "RikkeiSoft"
    })
  }
  render() {
    return (
      <div>
        <b>Ex03</b><br />
        <b>Company: {this.state.company}</b>
        <br />
        <button onClick={this.changeCompany}>Change state</button>
      </div>
    )
  }
}

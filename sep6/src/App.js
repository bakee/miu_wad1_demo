import './App.css';
import React from 'react';

class Message extends React.PureComponent {
  componentDidUpdate() {
    console.log("Message component updated");
    console.log("Message props: ", this.props);
  }
  render() {
    return (
      <div>{this.props.msg}</div>
    );
  }
}

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: 'abc', value: 0 };
  }

  handleClick = () => {
    this.setState({ value: this.state.value + 1 });
  }

  handleUpdateText = () => {
    this.setState({ text: this.state.text + "1" });
  }

  render() {
    return (
      <div>
        <Message msg={this.state.text} />
        <p>{this.state.value}</p>
        <button onClick={this.handleClick}>Update Value</button>
        <button onClick={this.handleUpdateText}>Update Text</button>
      </div>
    );
  }

};

class Button extends React.Component {
  constructor(props) {
    //super(); 
    super(props);
    console.log("pros: ", props); // okay
    console.log("this.props", this.props); // undefined
  }

  render() {
    return <div>Button Component</div>
  }
}


function App() {
  const data = [
    { id: 1, name: "First" },
    { id: 2, name: "Second" },
    { id: 3, name: "Third" },
  ];
  return (
    <div className="App">
      <Button text="abcd" />
      <hr />
      {
        data
          .filter(d => d.id < 3)
          .map(d => <p key={d.id}>{d.name}</p>)
      }
    </div>
  );
}

export default App;

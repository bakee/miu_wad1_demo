import './App.css';
import React from 'react';

class StudentRenderer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {students: [
      { name: 'Alice', age: 20 },
      { name: 'Bob', age: 19 },
      { name: 'Jimmy', age: 21 }
    ]};
  }

  deleteStudent = (index) => {
    //const students = [...this.state.students];
    //const students = this.state.students;
    //students.splice(index, 1);
    //this.state.students.splice(index, 1);
    this.state.students.push({name:'New student', age: 10});
    this.setState({ student: this.state.students });
  }


  render() {
    return (
      <div>
        {this.state.students.map((s, idx) => <p key={idx}>{s.name}</p>)}
      <button onClick={this.deleteStudent}>Delete Student</button>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <StudentRenderer/>
    </div>
  );
}

export default App;

import './App.css';

function StudentRenderer({ count}) {
  return (
    <li className="item">

      {/* {count} {count > 1 ? "students" : "student"} */}
      {count} student{count > 1 && "s"}
    </li>
  );
}

function App() {
  return (
    <div className="App">
      <StudentRenderer count={7}  />
      <StudentRenderer count={1}  />
    </div>
  );
}

export default App;

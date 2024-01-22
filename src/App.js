import "./App.css";
import HomePage from "./components/HomePage";
import EmployeePage from "./components/EmployeePage";

const styles = {
  border: "1px solid black",
  display: "flex",
  justifyContent: "center",
  width: "50%",
  margin: "0 auto"

}

function App() {
  return (
    <div className="App">
      <h1>Employees App</h1>
      <div style={styles}>
        <HomePage />
        <EmployeePage />
      </div>
    </div>
  );
}

export default App;

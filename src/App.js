
import './App.css';
import HomePage from'./Components/HomePage';
import SearchBar from './Components/SearchBar';
import Header from './Components/Header';
import EmployeeList from './Components/EmployeeList';
import EmployeePage from'./Components/EmployeePage';
import EmployeeListItems from './Components/EmployeeListItems';


function App() {
  return <div className="App">
    <HomePage/>
    <SearchBar/>
    <Header/>
    <EmployeeList/>
    <EmployeePage/>
    <EmployeeListItems/>
  </div>;
 
}

export default App;

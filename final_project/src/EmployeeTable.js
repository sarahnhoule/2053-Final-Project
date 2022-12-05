import logo from './logo.svg';
import './App.css';

const Table = (props) => {
    return (
      <table>
        <thead>
    <tr>
        <th>Employee Name</th>
        <th>Employee Job</th>
        </tr>
        </thead>
      <tbody>
     <tr>
        <td>Boomer</td>
        <td>Software Engineer</td>
        </tr>
      <tr>
        <td>Rocky</td>
        <td>Cloud Architect</td>
       </tr>
        <tr>
        <td>Cocoa</td>
        <td>UX Designer</td>
       </tr> 
        </tbody>   
        </table>   
    );
  
  }
  
  
  function BrokenTable(person) {
    const nameAndJob = person.map((person)=>
    <li>Name: {name}, Job: {job}</li>);

    return (
        <ul>
            {nameAndJob}
        </ul>
    )
}

  function EmployeeTable() {  
     
    return (  
      <Table />  
    );
  }
  
  export default EmployeeTable;

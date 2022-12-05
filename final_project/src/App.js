import logo from './logo.svg';
import './App.css';

function OneApp() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

  function App() {
    const apps=[];
    for (let i=0;i<=10;i++){
      apps.push(<OneApp />);
    }
    return(
    <div>
      {apps}
    </div>
    )
  }



export default App;


// import './App.css';
// import React,{useState} from 'react';


// function Example() {
// const[count,setCount] = useState(0);


// const increaseLikes = () => {
//   setCount(count+1);
// }
// return(
// <div>
//   <p> You clicked {count} times.</p>
//   <button onClick={increaseLikes}>Click me</button>
// </div>
// )

// }



// export default Comment;

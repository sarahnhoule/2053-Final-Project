import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import WelcomeList from "./WelcomeList";
import Table from "./EmployeeTable"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Table />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import Example from './App';
// import reportWebVitals from './reportWebVitals';
// import Likes from './Likes'
// import Comment from './Comment';
// import likeButton from './like.png';



// var authorObj = {name: "Robo",
//               avatarUrl:"https://gravatar.com/avatar/748506960d38cfe99fbe6819b55b916e?s=200&d=robohash&r=x"}
  

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//           <Comment author={authorObj} text="beep bop boop" date={new Date().toLocaleTimeString()}/>
//           <Likes/>
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
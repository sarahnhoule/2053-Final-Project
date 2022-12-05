import ReactDOM from 'react-dom/client';
import likeButton from './like.png';
//my like button never worked as import
//need to figure out my developer tools as well - react not showing up 
import './App.css';
import React,{useState} from 'react';



function Likes() {

  const[likes,setLikes] = useState(0);
  
  
  const increaseLikes = () => {
    setLikes(likes+1);
  }
  return (
    <div>  
       <p> 
        {Likes }     
        </p>       
      <img className='like-img' src={likeButton} ></img>
      <p>{likes} likes</p>
      <button onClick={increaseLikes}>Like</button>  
      </div>
      );
  
  }






export default Likes;




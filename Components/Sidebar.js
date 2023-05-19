import React from 'react';
import './Sidebar.css';

const Home = () => {
  return (
    <>
    <div>
     <div className="sidebar d-none d-md-block">
      <div className="logo"></div>
       <ul>
        <li> <span className="fas fa-home"></span> <a className="active anch" href="#home">Home</a> </li>
        <li> <span className="fas fa-search"></span> <a className=" anch" href="/Search">Search</a> </li>
        <li> <span className="far fa-compass"></span> <a className="anch" href="/Explore">Explore</a> </li>
        <li> <span className="fas fa-film"></span> <a className="anch" href="/ Reels">Reels</a> </li>
        <li> <span className="fab fa-facebook-messenger"></span> <a className="anch" href="/Messages">Messages</a> </li>
        <li> <span className="far fa-heart"></span> <a className="anch" href="/Notifications">Notifications</a> </li>
        <li> <span className="fas fa-plus-square"></span> <a className="anch" href="/Create">Create</a></li>
        <li> <span className="fas fa-user-circle"></span> <a className="anch" href="/Profile">Profile</a> </li>
        <li> <span className="fas fa-reorder"></span> <a className="anch" href="/">More</a> </li>
      </ul>
     </div>
    </div>
    </>
  )
}

export default Home;
import React from 'react';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import { Routes, Route } from 'react-router-dom';
import AddBirthday from './Components/AddBirthday';
import OneMoreStep from './Components/OneMoreStep';
import Home from './Components/Home';

function App() {
  return (
    <div>
      <Routes>
         <Route path="/" element={<Login/>}></Route>
         <Route path="/SignUp" element={<SignUp/>}> </Route>
         <Route path="/AddBirthday" element={<AddBirthday/>}> </Route>
         <Route path="/OneMoreStep" element={<OneMoreStep/>}> </Route>
         <Route path="/Home" element={<Home/>}> </Route>
      </Routes>
    </div>
  );
}

export default App;

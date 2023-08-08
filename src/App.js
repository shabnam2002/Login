import React from 'react';
import SignUp from './Componnets/SignUp';
import Login from './Componnets/Login';
import {Route , Routes , Navigate} from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/" element={<Navigate to="/signup"></Navigate>}></Route>
      </Routes>
    </div>
  );
};

export default App;
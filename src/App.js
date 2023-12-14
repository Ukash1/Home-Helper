// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./compo/Login";
// import Signup from "./compo/Signup";
import React from 'react';
import Signup from "./compo/Signup";

function App() {
  return (
    <div>
      <Login></Login>
      <Signup></Signup>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;

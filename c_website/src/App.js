import React from "react";
import Sidebar from "./Side";  
import { BrowserRouter } from 'react-router-dom';
import "./App.css";  
function App() {
  return (
    <BrowserRouter>
      <Sidebar />
    </BrowserRouter>
  );
}
export default App;

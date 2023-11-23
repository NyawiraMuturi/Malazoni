import { useState } from "react";
import Topbar from "./layout/Topbar";
import Login from "./components/form/Login";
import { Route, Routes } from 'react-router';
import Slider from "./layout/Slider";



function App() {
  const [token, setToken] = useState()

  return (
    <Routes>
      <Route path="/" element={<Topbar/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/landing" element={<Slider/>}/>
    </Routes>
    
  );
}

export default App;

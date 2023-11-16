
import Topbar from "./layout/Topbar";
import Login from "./components/form/Login";
import { Route, Routes } from 'react-router';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Topbar/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    
    
  );
}

export default App;

import { Routes,Route } from "react-router-dom";
import "./App.css";
import Homepage from "./Pages/Homepage";
import Navbar from "./Components/Navbar";
import AddUser from "./Components/user/AddUser";
import Edit from "./Components/user/EditUser";
import User from "./Components/user/UserDetails";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route exact path="/users/:id" element={<User/>}/>
        <Route exact path="/addUser" element={<AddUser/>}/>
        <Route exact path="/editUser/:id" element={<Edit/>}/>
      </Routes>
    </div>
  );
}

export default App;

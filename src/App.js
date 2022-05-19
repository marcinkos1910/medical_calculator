import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import AddChild from "./components/addchild/AddChild";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/addchild" element={<AddChild/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

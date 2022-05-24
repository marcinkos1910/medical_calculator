import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import AddChild from "./components/addchild/AddChild";
import Home from "./components/home/Home";
import DrugsFinder from "./components/drugsFinder/DrugsFinder";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/addchild" element={<AddChild/>}/>
            <Route path="/drugsfinder" element={<DrugsFinder/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./components/Create";
import Admin from "./components/Admin";
import Student from "./components/Student";
import Teacher from "./components/Teacher";
import Edit from "./components/Edit";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Admin />} />
          <Route path="/create" element={<Create />} />
          <Route path="/student" element={<Student />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

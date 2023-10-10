import { Route, Routes } from "react-router-dom";
import RegPage from "./Pages/RegPage/RegPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import HomePage from "./Pages/HomePage/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/reg" element={<RegPage />}></Route>
      <Route path="/" element={<LoginPage />}></Route>
      <Route path="/home" element={<HomePage />}></Route>
    </Routes>
  )
}

export default App;

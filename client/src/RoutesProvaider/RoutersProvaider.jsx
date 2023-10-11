import { Route, Routes } from "react-router-dom";
import RegPage from "../Pages/RegPage/RegPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import HomePage from "../Pages/HomePage/HomePage";

function RoutesProvaider(isAuth) {
    console.log(isAuth);
    if (isAuth) {
        return <Routes>
            <Route path="/home" element={<HomePage />}></Route>
        </Routes>
    } else {
        return <Routes>
            <Route path="/reg" element={<RegPage />}></Route>
            <Route path="/" element={<LoginPage />}></Route>
        </Routes>
    }
}

export default RoutesProvaider;
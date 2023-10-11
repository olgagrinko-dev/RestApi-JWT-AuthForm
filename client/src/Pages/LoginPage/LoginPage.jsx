import Header from "../../components/Header/Header";
import style from "./login.module.scss";
import { useState, useContext } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import MyContext from "../../context/context";

function LoginPage() {
    const [input, setInput] = useState({ email: "", password: "" });
    const contextGlobalData = useContext(MyContext);
    const navigate = useNavigate();

    function chengeInp(event) {
        setInput({ ...input, [event.target.name]: event.target.value })
    }

    async function authUser() {
        const result = await axios.post('http://localhost:3001/user/auth', input, { withCredentials: true });
        console.log(result.data);
        contextGlobalData.login()
        navigate('/home');
    }

    return (
        <div>
            <Header />
            <div className={style.wrapper}>
                <div className={style.info}>
                    <h1>Sign In</h1>
                    <p>Log in to access your account or create one. Verify your email for seamless access.</p>
                </div>

                <div className={style.log}>
                    <div>
                        <p>email</p>
                        <input name="email" placeholder="Your email" onChange={chengeInp}></input>
                    </div>
                    <div>
                        <p>password</p>
                        <input name="password" placeholder="Must be at least 8 characters." onChange={chengeInp}></input>
                    </div>
                </div>

                <button onClick={authUser}>Continue</button>
                <p className={style.text}>Not registered yet? Sign Up</p>
            </div>
        </div>
    )
}

export default LoginPage;
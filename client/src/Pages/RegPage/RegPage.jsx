import Header from "../../components/Header/Header";
import style from "./reg.module.scss";
import { useState } from "react";
import axios from 'axios';

function RegPage() {
    const [input, setInput] = useState({ name: "", surname: "", email: "", password: "" });

    function chengeInp(event) {
        setInput({ ...input, [event.target.name]: event.target.value });
    }

    async function isShow() {
        const result = await axios.post('http://localhost:3001/user', input);
        console.log(result.data);
        console.log(input);
    }

    return (
        <div>
            <Header />
            <div className={style.wrapper}>
                <div className={style.info}>
                    <h1>Welcome, let's create an account</h1>
                    <p>Create an account to keep track of your customers, and contributors. Once your account has been created then don’t forget to verify your account through mail.</p>
                </div>
                
                <div className={style.log}>
                    <div className={style.blokName}>
                        <div>
                            <p>name</p>
                            <input name='name' placeholder="Your name" onChange={chengeInp}></input>
                        </div>
                        <div>
                            <p>surname</p>
                            <input name='surname' placeholder="Your surname" onChange={chengeInp}></input>
                        </div>
                    </div>

                    <div>
                        <p>email</p>
                        <input name='email' placeholder="Your email" onChange={chengeInp}></input>
                    </div>
                    <div>
                        <p>password</p>
                        <input name='password' placeholder="Must be at least 8 characters." onChange={chengeInp}></input>
                    </div>
                </div>

                <button onClick={isShow}>Continue</button>
                <p className={style.text}>Already registered? Sign In</p>

            </div>
        </div>
    )
}

export default RegPage;
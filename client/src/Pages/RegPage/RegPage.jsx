import Header from "../../components/Header/Header";
import style from "./reg.module.scss";
import { useState } from "react";
import axios from 'axios';

function RegPage() {
    const [input, setInput] = useState({});
    const array = ["name", "surname", "email", "pwd"];

    async function isShow() {
        const result = await axios.post('http://localhost:3001/api/reg', input);
        console.log(result.data);
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
                            <input placeholder="Your name"></input>
                        </div>
                        <div>
                            <p>surname</p>
                            <input placeholder="Your surname"></input>
                        </div>
                    </div>

                    <div>
                        <p>email</p>
                        <input placeholder="Your email"></input>
                    </div>
                    <div>
                        <p>password</p>
                        <input placeholder="Must be at least 8 characters."></input>
                    </div>
                </div>

                <button>Continue</button>
                <p className={style.text}>Already registered? Sign In</p>

            </div>
        </div>
    )
}

export default RegPage;
import cooki from 'js-cookie';
import { useState } from 'react';

function useAuth() {
    const [token, setToken] = useState(null);

    function login() {
        const token = cooki.get('access_token');
        setToken(token);
    }

    function logout() {
        cooki.remove('access_token');
        setToken(null);
    }
    return { token: token, login: login, logout: logout }
}

export default useAuth;
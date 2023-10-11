import { Link } from 'react-router-dom';
import style from './header.module.scss';
import MyContext from '../../context/context';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
    const { token, logout } = useContext(MyContext);
    const navigate = useNavigate();

    function deleteToken() {
        logout();
        navigate('/');
    }

    if (token) {
        return (
            <div className={style.header}>
                <p onClick={deleteToken}> Log out </p>
            </div>
        )
    } else {
        return (
            <div className={style.header}>
                <p>< Link to={'/'}> Sign In </Link></p>
                <p>< Link to={'/reg'}> Sign Up </Link></p>
            </div>
        )
    }
}

export default Header;